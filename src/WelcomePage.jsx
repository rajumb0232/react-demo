import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchUser = async () => {
        console.log('Fetching user...');
      try {
        const res = await axios.get(`${BASE_URL}/account`, {
          withCredentials: true,
        });
        console.log('User fetched:', res.data);
        setUsername(res.data.email); // or res.data.name if you return that
      } catch (error) {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          setUsername(null);
        }
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
    setUsername(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {username ? (
        <>
          <h1 className="text-3xl font-bold mb-4 text-center">Hello, {username}</h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Our App</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default WelcomePage;
