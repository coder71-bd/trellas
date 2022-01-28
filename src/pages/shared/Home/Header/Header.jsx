import Navbar from '../../../../components/Navbar';
import useAuth from '../../../../hooks/useAuth';

const links = [
  { path: '/', name: 'Home' },
  { path: '/explore', name: 'Explore' },
];

const userLinks = [
  { path: '/', name: 'Home' },
  { path: '/explore', name: 'Explore' },
  { path: '/myblogs', name: 'My Blogs' },
];

const Header = () => {
  const { admin, user } = useAuth();
  const adminLinks = [
    { path: '/', name: 'Home' },
    { path: '/explore', name: 'Explore' },
    { path: '/admin/approveBlogs', name: 'Approve' },
    { path: '/admin/makeAdmin', name: 'Make Admin' },
  ];
  return (
    <div>
      {user?.email ? (
        admin ? (
          <Navbar links={adminLinks} />
        ) : (
          <Navbar links={userLinks} />
        )
      ) : (
        <Navbar links={links} />
      )}
    </div>
  );
};

export default Header;
