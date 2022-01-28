import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true); // user using the login functionality
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const processSignInWithGoogle = (navigate) => {
    setIsLoading(true); // user trying to log with google

    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { user } = result;
        saveUser(user.displayName, user.email);
        setUser({
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
        });
      })
      .catch((error) => setAuthError(error.message));
  };

  //REGISTRATION PROCESS OF USER
  const processSignUp = (name, email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const {
          user: { emailVerified },
        } = result;

        setAuthError('');

        sendEmailVerification(auth.currentUser);

        const newUser = { email, displayName: name, emailVerified };

        setUser(newUser);

        // save user to the database
        saveUser(name, email);

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => setAuthError(error.message));
        navigate('/emailverify');
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  //USER LOGIN PROCESS
  const processSignIn = (email, password, location, navigate) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const redirect_uri = location?.state?.from || '/';
        navigate(redirect_uri);
        setAuthError('');
      })
      .catch((error) => setAuthError(error.message))
      .finally(() => setIsLoading(false));
  };

  // change the user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false); // as the user state changed so we are not in loading state
    });
    return () => unsubscribed;
  }, [auth]);

  // find if the user is admin or not
  useEffect(() => {
    axios
      .get(
        `https://trellas-backend.herokuapp.com/user/isAdmin?email=${user.email}`
      )
      .then((response) => setAdmin(response.data.admin));
  }, [user.email]);

  //process user logout
  const logout = () => {
    setIsLoading(true);
    return signOut(auth)
      .then(() => {})
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (displayName, email) => {
    // save user to the database
    axios.put('https://trellas-backend.herokuapp.com/user', {
      email,
      displayName,
    });
  };

  return {
    user,
    admin,
    isLoading,
    setIsLoading,
    setAuthError,
    authError,
    processSignInWithGoogle,
    processSignUp,
    processSignIn,
    logout,
  };
};

export default useFirebase;
