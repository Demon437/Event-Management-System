import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    const userData = {
      name: formData.name || formData.email.split('@')[0],
      email: formData.email
    };

    login(userData);

    if (isLogin) {
      toast.success(`Welcome back, ${userData.name}!`);
      navigate('/');
    } else {
      toast.success(`Account created successfully! Welcome to Webix_EventHub, ${userData.name}!`);
      navigate('/');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialLogin = (provider) => {
    const userData = {
      name: `${provider} User`,
      email: `user@${provider.toLowerCase()}.com`
    };
    login(userData);
    toast.success(`Logged in with ${provider}!`);
    setTimeout(() => navigate('/'), 1000);
  };

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 shadow-2xl"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-full mb-4">
              <FaUser className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-white font-montserrat">
              {isLogin ? 'Welcome Back!' : 'Join EventHub'}
            </h2>
            <p className="text-gray-300 mt-2">
              {isLogin ? 'Login to manage your events' : 'Create an account to get started'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-white font-semibold mb-2">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                    placeholder="Enter your name"
                    className="w-full bg-white/10 text-white border border-white/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-400"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-white font-semibold mb-2">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-white/10 text-white border border-white/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="w-full bg-white/10 text-white border border-white/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-400"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-white font-semibold mb-2">Confirm Password</label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={!isLogin}
                    placeholder="Confirm your password"
                    className="w-full bg-white/10 text-white border border-white/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-400"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-primary-400 hover:text-primary-300">
                  Forgot password?
                </a>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn-primary text-lg py-3"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialLogin('Google')}
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg border border-white/20 transition-colors"
            >
              <FaGoogle />
              <span>Google</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialLogin('Facebook')}
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg border border-white/20 transition-colors"
            >
              <FaFacebook />
              <span>Facebook</span>
            </motion.button>
          </div>

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary-400 hover:text-primary-300 font-semibold"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-4 text-center">
            <Link to="/" className="text-gray-400 hover:text-white text-sm">
              ← Back to Home
            </Link>
          </div>
        </motion.div>

        {/* Decorative Animation */}
        <div className="mt-8 text-center" data-aos="fade-up">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_myejiggj.json"
            background="transparent"
            speed="1"
            style={{ width: '150px', height: '150px', margin: '0 auto' }}
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
