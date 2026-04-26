import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import { FaRocket, FaChartLine, FaUsers, FaBullhorn, FaLock, FaGlobe, FaStar } from 'react-icons/fa';
import { eventsData } from '../data/eventsData';

const Home = () => {
  // Featured Indian events
  const featuredEvents = eventsData.slice(0, 3);

  const features = [
    {
      icon: FaRocket,
      title: 'Easy Event Creation',
      description: 'Create stunning events in minutes with our intuitive interface and pre-built templates'
    },
    {
      icon: FaChartLine,
      title: 'Real-time Analytics',
      description: 'Track registrations, engagement, attendance, and revenue in real-time dashboards'
    },
    {
      icon: FaUsers,
      title: 'Attendee Management',
      description: 'Manage attendees, tickets, check-ins, and communications effortlessly'
    },
    {
      icon: FaBullhorn,
      title: 'Powerful Promotion',
      description: 'Reach your audience with integrated marketing tools and social sharing features'
    },
    {
      icon: FaLock,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with SSL encryption and 99.9% uptime guarantee'
    },
    {
      icon: FaGlobe,
      title: 'Global Reach',
      description: 'Support for multiple currencies, languages, and payment gateways worldwide'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Events Hosted' },
    { value: '500K+', label: 'Happy Attendees' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '50+', label: 'Countries' }
  ];

  const testimonials = [
    {
      name: 'Amit Sharma',
      role: 'Event Organizer',
      text: 'Webix_EventHub transformed how we manage events. The platform is intuitive and powerful!',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Priya Patel',
      role: 'Conference Manager',
      text: 'The analytics dashboard helped us understand attendee behavior and improve future events.',
      image: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Festival Director',
      text: 'Best platform for managing large-scale events. Support team is excellent!',
      image: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  return (
    <div>
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
              Why Choose Webix_EventHub?
            </h2>
            <p className="text-xl text-gray-300 font-raleway" data-aos="fade-up" data-aos-delay="100">
              Everything you need to create memorable and successful events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-8 text-center transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900/40 to-accent-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 font-raleway" data-aos="fade-up" data-aos-delay="100">
              Trusted by thousands of event organizers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-5xl md:text-6xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
              Featured Events
            </h2>
            <p className="text-xl text-gray-300 font-raleway" data-aos="fade-up" data-aos-delay="100">
              Discover amazing events happening near you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="text-center" data-aos="fade-up">
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Explore All Events
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 font-raleway" data-aos="fade-up" data-aos-delay="100">
              Real experiences from our community of event organizers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-primary-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 font-raleway" data-aos="fade-up" data-aos-delay="100">
              Get started with Webix_EventHub in just 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Create Event', description: 'Set up your event details and add all necessary information' },
              { step: '2', title: 'Promote', description: 'Share on social media and invite attendees through multiple channels' },
              { step: '3', title: 'Manage', description: 'Track registrations and manage attendees from one dashboard' },
              { step: '4', title: 'Analyze', description: 'Get detailed insights and feedback after your event' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Ready to Create Your Event?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-raleway">
              Join thousands of successful organizers who trust Webix_EventHub for their events
            </p>
            <Link to="/create-event">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg"
              >
                Get Started Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
