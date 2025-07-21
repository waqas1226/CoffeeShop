import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { signInWithGoogle, loginUser } from './HelpingFiles/firebase';
import { useUser } from './HelpingFiles/UserContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import authImage from '../images/bg_1.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const navigate = useNavigate();
  const { currentUser } = useUser();

   useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
setLoading(true);
    
    try {
      await loginUser(formData.email, formData.password);
      navigate('/');
    } catch (error) {
      setErrors({ 
        firebase: error.message 
      });
    } finally {
      setLoading(false);
    }
  };
    }
   const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
  try {
    const user1 = await signInWithGoogle();
    console.log(user1)
    navigate('/');
  } catch (error) {
    let errorMessage = "Failed to sign in with Google";
    if (error.code === 'auth/account-exists-with-different-credential') {
      errorMessage = "An account already exists with this email";
    }
    setErrors({ firebase: errorMessage });
  }
  finally {
    setGoogleLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 bg-black rounded-xl overflow-hidden shadow-2xl">
        {/* Image Section */}
        <div className="hidden lg:block relative">
          <img 
            src={authImage} 
            alt="Authentication" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center p-8">
            <div>
              <h2 className="text-3xl font-bold text-[#c49b63] mb-4">Welcome Back</h2>
              <p className="text-gray-300">We're so excited to see you again!</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-bold text-[#c49b63] mb-2">Login to Your Account</h1>
          <p className="text-gray-400 mb-8">Enter your credentials to continue</p>

          {errors.server && (
            <div className="mb-6 p-3 bg-red-900 text-red-100 rounded-lg">
              {errors.server}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49b63]`}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-3 bg-gray-700 border ${errors.password ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49b63]`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-[#c49b63] bg-gray-700 border-gray-600 rounded focus:ring-[#c49b63]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="text-sm text-[#c49b63] hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#c49b63] hover:bg-[#d8af70] text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Log In'}
            </button>

            {/* Register Link */}
            <p className="text-center text-gray-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#c49b63] hover:underline">Register</Link>
            </p>
          </form>
          {/* Continue with Google */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
              className={`w-full flex justify-center items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors btn-google ${googleLoading ? 'opacity-70' : ''}`}
            >
              {googleLoading ? (
    <>
      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
        {/* spinner SVG */}
      </svg>
      Signing in...
    </>
  ) : (
    <>
      <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5"/>
      Sign in with Google
    </>
  )}
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;