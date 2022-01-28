import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Alert from '../../../components/Alert';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useAuth();

  useEffect(() => {
    axios
      .get('https://trellas-backend.herokuapp.com/users')
      .then((response) => setUsers(response.data));
  }, []);

  let alert;

  const handleMakeAdmin = (data) => {
    const makeAdminData = {
      requester: user.email,
      newAdminEmail: data.email,
    };
    console.log(makeAdminData);
    axios
      .put(
        'https://trellas-backend.herokuapp.com/user/makeAdmin',
        makeAdminData
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount === 0) {
          setOpenAlert(true);
          setSuccess(false);
          setError(true);
        } else {
          axios
            .get('https://trellas-backend.herokuapp.com/users')
            .then((response) => setUsers(response.data));
          setError(false);
          setSuccess(true);
          setOpenAlert(true);
          reset();
        }
      });
    reset();
  };

  return (
    <div
      style={{ minHeight: 'calc(100vh - 100px)' }}
      className="flex justify-center my-6"
    >
      <div className="w-full md:w-2/3 space-y-6 text-center px-2 md:px-0">
        <p className="text-6xl font-semibold bg-rose-600 text-white -mt-8">
          Make New Admin
        </p>
        <form onSubmit={handleSubmit(handleMakeAdmin)}>
          {/* email */}
          <div className="mb-6">
            <input
              type="email"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="Enter new admin Email"
              {...register('email', {
                required: 'this field is required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please provide correct email address.',
                },
              })}
            />

            {errors.email && (
              <p className="text-error mb-2">{errors.email.message}</p>
            )}
          </div>

          {/* submit button */}
          <button type="submit" className="btn w-[222px] mx-auto md:w-72 py-2">
            Submit
          </button>
        </form>

        <h3>Available user</h3>
        {/* show all user here */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 "
                      >
                        Index
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, i) => (
                      <tr key={user._id} className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {i}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.displayName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.role || 'No role'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && openAlert && (
        <Alert
          message="The admin allready exist or make sure the user exist"
          openAlert={openAlert}
          setOpenAlert={setOpenAlert}
        />
      )}

      {success && openAlert && (
        <Alert
          message="Admin successfully made"
          openAlert={openAlert}
          setOpenAlert={setOpenAlert}
        />
      )}
    </div>
  );
};

export default MakeAdmin;
