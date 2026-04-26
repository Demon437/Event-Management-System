import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaTicketAlt } from 'react-icons/fa';
import { format } from 'date-fns';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden shadow-xl card-hover"
      data-aos="fade-up"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {event.category}
        </div>
      </div>

      <div className="p-6 text-white">
        <h3 className="text-2xl font-bold mb-3 font-montserrat">{event.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300">
            <FaCalendar className="mr-3 text-primary-400" />
            <span>{format(new Date(event.date), 'PPP')}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <FaMapMarkerAlt className="mr-3 text-primary-400" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <FaUsers className="mr-3 text-primary-400" />
            <span>{event.attendees || 0} Attendees</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaTicketAlt className="text-primary-400 mr-2" />
            <span className="text-2xl font-bold text-primary-400">₹{event.price}</span>
          </div>
          <button
            onClick={handleReadMore}
            className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
