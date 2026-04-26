import { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';
import { FaSearch, FaFilter } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { eventsData, categories } from '../data/eventsData';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRegister = (event) => {
    toast.success(`Successfully registered for ${event.title}!`);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
            Discover Events
          </h1>
          <p className="text-xl text-gray-300 font-raleway mb-4" data-aos="fade-up" data-aos-delay="100">
            Explore and participate in amazing events happening around you
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            From conferences and workshops to festivals and celebrations, find the perfect event to attend or create your own
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="glass rounded-2xl p-4" data-aos="fade-up">
            <div className="flex items-center space-x-4">
              <FaSearch className="text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search events by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="glass rounded-2xl p-6" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center space-x-4 mb-4">
              <FaFilter className="text-primary-400 text-xl" />
              <h3 className="text-white font-semibold text-lg">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8" data-aos="fade-up">
          <p className="text-gray-300 text-lg">
            Found <span className="text-primary-400 font-bold">{filteredEvents.length}</span> events
          </p>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20" data-aos="fade-up">
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_aaesnvcw.json"
              background="transparent"
              speed="1"
              style={{ width: '300px', height: '300px', margin: '0 auto' }}
              loop
              autoplay
            />
            <h3 className="text-2xl font-bold text-white mb-4">No events found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
