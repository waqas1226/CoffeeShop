import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { logoutUser } from './Helping Files/firebase';
import { useUser } from './Helping Files/UserContext';

const Logout = () => {
  const navigate = useNavigate();
  const { currentUser } = useUser();

  useEffect(() => {
    if (currentUser) {
      logoutUser().then(() => {
        console.log('user logout')
        navigate('/login');
      });
    } else {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-white text-xl">Logging out...</div>
    </div>
  );
};

export default Logout;