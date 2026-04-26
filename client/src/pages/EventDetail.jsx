import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaTicketAlt, FaArrowLeft, FaClock, FaShare } from 'react-icons/fa';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { eventsData } from '../data/eventsData';

const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = eventsData.find(e => e.id === parseInt(id));

    if (!event) {
        return (
            <div className="min-h-screen pt-24 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
                    <button
                        onClick={() => navigate('/events')}
                        className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                        Back to Events
                    </button>
                </div>
            </div>
        );
    }

    const handleRegister = () => {
        toast.success(`Successfully registered for ${event.title}!`);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: event.title,
                text: event.description,
                url: window.location.href,
            });
        } else {
            toast.success('Link copied to share!');
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/events')}
                    className="flex items-center text-primary-400 hover:text-primary-300 transition-colors mb-8 font-semibold"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Events
                </motion.button>

                {/* Event Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8"
                >
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-accent-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
                        {event.category}
                    </div>
                </motion.div>

                {/* Event Details Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass rounded-2xl p-8 md:p-10"
                >
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
                        {event.title}
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {event.fullDescription || event.description}
                    </p>

                    {/* Event Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-10 border-b border-white/10">
                        {/* Date */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-start space-x-4"
                        >
                            <div className="bg-primary-600/20 p-4 rounded-lg">
                                <FaCalendar className="text-primary-400 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-sm font-semibold mb-1">DATE</h3>
                                <p className="text-white text-lg font-semibold">
                                    {format(new Date(event.date), 'EEEE, MMMM dd, yyyy')}
                                </p>
                            </div>
                        </motion.div>

                        {/* Time */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-start space-x-4"
                        >
                            <div className="bg-primary-600/20 p-4 rounded-lg">
                                <FaClock className="text-primary-400 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-sm font-semibold mb-1">TIME</h3>
                                <p className="text-white text-lg font-semibold">10:00 AM - 6:00 PM</p>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-start space-x-4"
                        >
                            <div className="bg-primary-600/20 p-4 rounded-lg">
                                <FaMapMarkerAlt className="text-primary-400 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-sm font-semibold mb-1">LOCATION</h3>
                                <p className="text-white text-lg font-semibold">{event.location}</p>
                            </div>
                        </motion.div>

                        {/* Attendees */}
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-start space-x-4"
                        >
                            <div className="bg-primary-600/20 p-4 rounded-lg">
                                <FaUsers className="text-primary-400 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-sm font-semibold mb-1">ATTENDEES</h3>
                                <p className="text-white text-lg font-semibold">
                                    {event.attendees?.toLocaleString() || '0'} People
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Price and Action Buttons */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center space-x-3">
                            <FaTicketAlt className="text-primary-400 text-2xl" />
                            <div>
                                <p className="text-gray-400 text-sm">TICKET PRICE</p>
                                <p className="text-4xl font-bold text-primary-400">₹{event.price}</p>
                            </div>
                        </div>

                        <div className="flex gap-4 w-full md:w-auto">
                            <button
                                onClick={handleShare}
                                className="flex-1 md:flex-none bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                            >
                                <FaShare />
                                <span>Share</span>
                            </button>
                            <button
                                onClick={handleRegister}
                                className="flex-1 md:flex-none bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                            >
                                Register Now
                            </button>
                        </div>
                    </div>

                    {/* Additional Details */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 space-y-10"
                    >
                        {/* What to Expect */}
                        {event.whatToExpect && event.whatToExpect.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 font-montserrat">What to Expect</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {event.whatToExpect.map((item, index) => (
                                        <div key={index} className="flex items-start bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-colors">
                                            <span className="text-primary-400 mr-3 mt-1 text-lg">✓</span>
                                            <span className="text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Schedule */}
                        {event.schedule && event.schedule.length > 0 && (
                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-6 font-montserrat">Event Schedule</h3>
                                <div className="space-y-3">
                                    {event.schedule.map((item, index) => (
                                        <div key={index} className="flex items-start bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-colors">
                                            <div className="min-w-fit">
                                                <span className="text-primary-400 font-bold text-lg">{item.time}</span>
                                            </div>
                                            <div className="ml-6">
                                                <p className="text-gray-300">{item.activity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Speakers */}
                        {event.speakers && event.speakers.length > 0 && (
                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-6 font-montserrat">Featured Speakers</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {event.speakers.map((speaker, index) => (
                                        <div key={index} className="bg-gradient-to-br from-primary-600/20 to-accent-600/20 p-4 rounded-lg border border-primary-500/30">
                                            <p className="text-white font-semibold">{speaker}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default EventDetail;
