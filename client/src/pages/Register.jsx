import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaTicketAlt, FaCreditCard } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const event = location.state?.event;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: 1,
    paymentMethod: 'card'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Successfully registered for ${event?.title}! Confirmation sent to ${formData.email}`);
    setTimeout(() => navigate('/events'), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!event) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">No Event Selected</h2>
          <button onClick={() => navigate('/events')} className="btn-primary">
            Browse Events
          </button>
        </div>
      </div>
    );
  }

  const totalAmount = event.price * formData.tickets;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-8 shadow-2xl"
        >
          {/* Event Info */}
          <div className="mb-8 pb-8 border-b border-white/20">
            <h1 className="text-3xl font-bold text-white mb-4 font-montserrat">
              Event Registration
            </h1>
            <div className="flex items-start space-x-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
                <p className="text-gray-300 mb-2">{event.description}</p>
                <div className="flex items-center space-x-4 text-gray-400">
                  <span>📅 {new Date(event.date).toLocaleDateString('en-IN')}</span>
                  <span>📍 {event.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Full Name *</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-white/10 text-white border border-white/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email Address *</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-white/10 text-white border border-white/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Phone Number *</label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/10 text-white border border-white/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Number of Tickets *</label>
                <div className="relative">
                  <FaTicketAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    name="tickets"
                    value={formData.tickets}
                    onChange={handleChange}
                    required
                    min="1"
                    max="10"
                    className="w-full bg-white/10 text-white border border-white/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-white font-semibold mb-2">Payment Method *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'card' 
                    ? 'border-primary-500 bg-primary-500/20' 
                    : 'border-white/20 bg-white/5'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <FaCreditCard className="mr-2 text-primary-400" />
                  <span className="text-white">Credit/Debit Card</span>
                </label>

                <label className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'upi' 
                    ? 'border-primary-500 bg-primary-500/20' 
                    : 'border-white/20 bg-white/5'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <span className="text-white">UPI</span>
                </label>

                <label className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  formData.paymentMethod === 'netbanking' 
                    ? 'border-primary-500 bg-primary-500/20' 
                    : 'border-white/20 bg-white/5'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="netbanking"
                    checked={formData.paymentMethod === 'netbanking'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <span className="text-white">Net Banking</span>
                </label>
              </div>
            </div>

            {/* Price Summary */}
            <div className="glass-dark rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Price Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Ticket Price:</span>
                  <span>₹{event.price}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Number of Tickets:</span>
                  <span>{formData.tickets}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal:</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Service Fee:</span>
                  <span>₹{Math.round(totalAmount * 0.05)}</span>
                </div>
                <div className="border-t border-white/20 pt-3 flex justify-between text-white text-xl font-bold">
                  <span>Total Amount:</span>
                  <span className="text-primary-400">₹{totalAmount + Math.round(totalAmount * 0.05)}</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => navigate('/events')}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex-1 btn-primary text-lg py-3"
              >
                Proceed to Payment
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
