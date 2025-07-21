import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { auth, registerUser, signInWithGoogle } from './HelpingFiles/firebase';
import { useUser } from './HelpingFiles/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser,
    faEnvelope,
    faLock,
    faEye,
    faEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import authImage from '../images/bg_1.jpg';
import { updateProfile } from 'firebase/auth';
// import { getAuth, updateProfile } from 'firebase/auth';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useUser();


 useEffect(() => {
  if (currentUser && !currentUser.displayName && formData.name) {
    updateProfile(auth.currentUser, {
      displayName: formData.name
    }).then(() => {
      // console.log("Profile updated");
      navigate('/');
    }).catch((error) => {
      // console.error("Error updating profile:", error);
    });
  }
}, [currentUser, formData.name, navigate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser(formData.email, formData.password);
      // Additional user data can be saved to Firestore here
      // navigate('/');
    } catch (error) {
      setErrors({ 
        firebase: error.message 
      });
    } finally {
      setLoading(false);
    }

    if (validateForm()) {
      // Submit registration logic here
      // console.log('Registration data:', formData);
    }
  };
 const handleGoogleSignUp = async () => {
    try {
     const user1 = await  signInWithGoogle();
     console.log(user1)
      navigate('/');
    } catch (error) {
      setErrors({ firebase: error.message });
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
              <h2 className="text-3xl font-bold text-[#c49b63] mb-4">Welcome to Our Community</h2>
              <p className="text-gray-300">Join thousands of happy customers enjoying our services</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-bold text-[#c49b63] mb-2">Create Account</h1>
          <p className="text-gray-400 mb-8">Please fill in the information below</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49b63]`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

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

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-300 mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-3 bg-gray-700 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49b63]`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-[#c49b63] bg-gray-700 border-gray-600 rounded focus:ring-[#c49b63]"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                I agree to the <a href="#" className="text-[#c49b63] hover:underline">Terms and Conditions</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#c49b63] hover:bg-[#d8af70] text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Create Account
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-400">
              Already have an account?{' '}
              <a href="/login" className="text-[#c49b63] hover:underline">Log in</a>
            </p>
          </form>
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
              onClick={handleGoogleSignUp}
              className="w-full flex justify-center items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors"
            >
              <img 
                src="https://www.google.com/favicon.ico" 
                alt="Google" 
                className="w-5 h-5"
              />
              Sign up with Google
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Register;