import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import toast from 'react-hot-toast';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    attendees: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Event Request:", formData);

    toast.success("Request Sent Successfully ✅");

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      attendees: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-montserrat">
            Request Your Event
          </h1>
          <p className="text-xl text-gray-300">
            Fill the form below to send your event request to our team
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">

          {/* User Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />

          {/* Event Title */}
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3"
            />
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-primary-400" />
            <input
              type="text"
              name="location"
              placeholder="Event Location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3"
            />
          </div>

          {/* Attendees */}
          <div className="flex items-center space-x-2">
            <FaUsers className="text-primary-400" />
            <input
              type="number"
              name="attendees"
              placeholder="Expected Attendees"
              value={formData.attendees}
              onChange={handleChange}
              required
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full btn-primary text-lg py-4"
          >
            Send Request
          </motion.button>

        </form>

        {/* Animation */}
        <div className="mt-12 text-center">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json"
            background="transparent"
            speed="1"
            style={{ width: '200px', height: '200px', margin: '0 auto' }}
            loop
            autoplay
          />
        </div>

      </div>
    </div>
  );
};

export default CreateEvent;