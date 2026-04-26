import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaLink, FaShare } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Promotion = () => {
  const [selectedEvent, setSelectedEvent] = useState('diwali-celebration');
  const [emailList, setEmailList] = useState('');

  const events = [
    { id: 'diwali-celebration', name: 'Diwali Celebration 2024' },
    { id: 'bollywood-night', name: 'Bollywood Music Night' },
    { id: 'startup-summit', name: 'Startup India Summit' },
    { id: 'ipl-fanfest', name: 'IPL Fan Fest 2024' }
  ];

const shareOnSocial = (platform) => {
  let url = "";

  switch (platform) {
    case "Facebook":
      url = "https://www.facebook.com/sharer/sharer.php?u=https://share.google/2Rvk5XPpdXUb99gaM";
      break;
    case "LinkedIn":
      url = "https://www.linkedin.com/company/webixinfotech/posts/?feedView=all";
      break;
    case "Instagram":
      url = "https://www.instagram.com/webix_infotech?igsh=MXh0ODEybHEzamZzbg==";
      break;
    default:
      url = "/";
  }

  window.open(url, "_blank");
};
  const copyLink = () => {
    navigator.clipboard.writeText('https://eventhub.com/event/diwali-celebration');
    toast.success('Link copied to clipboard!');
  };

  const sendEmailInvites = (e) => {
    e.preventDefault();
    toast.success('Email invites sent successfully!');
    setEmailList('');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
            Promote Your Event
          </h1>
          <p className="text-xl text-gray-300 font-raleway mb-4" data-aos="fade-up" data-aos-delay="100">
            Maximize your event's reach through multiple marketing channels
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            Leverage our powerful promotion tools to reach your target audience via social media, email, and direct sharing
          </p>
        </motion.div>

        {/* Event Selector */}
        <div className="glass rounded-2xl p-6 mb-8" data-aos="fade-up">
          <label className="block text-white font-semibold mb-4">Select Event to Promote</label>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {events.map(event => (
              <option key={event.id} value={event.id} className="bg-slate-800">{event.name}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social Media Sharing */}
          <div className="glass rounded-2xl p-8" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <FaShare className="text-primary-400 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-white font-montserrat">Social Media</h2>
            </div>
            <p className="text-gray-300 mb-6">Share your event on social platforms</p>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => shareOnSocial('Facebook')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-colors"
              >
                <FaFacebook className="text-2xl" />
                <span>Share on Facebook</span>
              </motion.button>

        

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => shareOnSocial('LinkedIn')}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
                <span>Share on LinkedIn</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => shareOnSocial('Instagram')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-colors"
              >
                <FaInstagram className="text-2xl" />
                <span>Share on Instagram</span>
              </motion.button>
            </div>

            {/* Copy Link */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1 mr-4">
                  <FaLink className="text-primary-400" />
                  <span className="text-gray-300 text-sm truncate">https://eventhub.com/event/diwali-celebration</span>
                </div>
                <button
                  onClick={copyLink}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>

          {/* Email Invites */}
          <div className="glass rounded-2xl p-8" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-primary-400 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-white font-montserrat">Email Invites</h2>
            </div>
            <p className="text-gray-300 mb-6">Send personalized invitations via email</p>

            <form onSubmit={sendEmailInvites} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Email Addresses</label>
                <textarea
                  value={emailList}
                  onChange={(e) => setEmailList(e.target.value)}
                  placeholder="Enter email addresses (comma separated)&#10;example@email.com, another@email.com"
                  rows="6"
                  className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary"
              >
                Send Invitations
              </motion.button>
            </form>

            {/* Email Template Preview */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">Email Preview:</p>
              <div className="text-gray-300 text-sm space-y-2">
                <p className="font-semibold">Subject: You're Invited to Diwali Celebration 2024!</p>
                <p className="text-xs">A personalized invitation with event details, date, location, and registration link will be sent.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Highlights */}
        <div className="mt-12 glass rounded-2xl p-8" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_V9t630.json"
                background="transparent"
                speed="1"
                style={{ width: '150px', height: '150px', margin: '0 auto' }}
                loop
                autoplay
              />
              <h3 className="text-white font-semibold mt-4">Engaging Content</h3>
              <p className="text-gray-400 text-sm mt-2">Create compelling event descriptions</p>
            </div>
            <div className="text-center">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json"
                background="transparent"
                speed="1"
                style={{ width: '150px', height: '150px', margin: '0 auto' }}
                loop
                autoplay
              />
              <h3 className="text-white font-semibold mt-4">Wide Reach</h3>
              <p className="text-gray-400 text-sm mt-2">Connect with your target audience</p>
            </div>
            <div className="text-center">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_myejiggj.json"
                background="transparent"
                speed="1"
                style={{ width: '150px', height: '150px', margin: '0 auto' }}
                loop
                autoplay
              />
              <h3 className="text-white font-semibold mt-4">Track Results</h3>
              <p className="text-gray-400 text-sm mt-2">Monitor engagement and conversions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
