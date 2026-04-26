import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardCard from '../components/DashboardCard';
import AnalyticsChart from '../components/AnalyticsChart';
import { FaCalendarAlt, FaUsers, FaDollarSign, FaChartLine, FaEdit, FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { myEventsData, analyticsData } from '../data/analyticsData';

const ManageEvents = () => {
  const [myEvents] = useState(myEventsData);

  const totalRevenue = myEvents.reduce((sum, event) => sum + event.revenue, 0);
  const totalRegistrations = myEvents.reduce((sum, event) => sum + event.registrations, 0);

  const handleEdit = (eventId) => {
    toast.success('Edit functionality coming soon!');
  };

  const handleDelete = (eventId) => {
    toast.error('Event deleted successfully!');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
            Manage Events
          </h1>
          <p className="text-xl text-gray-300 font-raleway mb-4" data-aos="fade-up" data-aos-delay="100">
            Track, analyze, and manage all your events in one dashboard
          </p>
          <p className="text-lg text-gray-400 max-w-3xl" data-aos="fade-up" data-aos-delay="150">
            Monitor real-time registrations, revenue, attendance, and key metrics for all your events
          </p>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <DashboardCard
            icon={FaCalendarAlt}
            title="Total Events"
            value={myEvents.length}
            color="from-blue-500 to-blue-600"
            trend={12}
          />
          <DashboardCard
            icon={FaUsers}
            title="Total Registrations"
            value={totalRegistrations}
            color="from-green-500 to-green-600"
            trend={25}
          />
          <DashboardCard
            icon={FaDollarSign}
            title="Total Revenue"
            value={`₹${totalRevenue.toLocaleString('en-IN')}`}
            color="from-purple-500 to-purple-600"
            trend={18}
          />
          <DashboardCard
            icon={FaChartLine}
            title="Avg. Attendance"
            value={Math.round(totalRegistrations / myEvents.length)}
            color="from-pink-500 to-pink-600"
            trend={8}
          />
        </div>

        {/* Analytics Chart */}
        <div className="mb-12">
          <AnalyticsChart data={analyticsData} type="bar" />
        </div>

        {/* Events Table */}
        <div className="glass rounded-2xl p-6" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Your Events</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-gray-300 font-semibold py-4 px-4">Event</th>
                  <th className="text-left text-gray-300 font-semibold py-4 px-4">Date</th>
                  <th className="text-left text-gray-300 font-semibold py-4 px-4">Location</th>
                  <th className="text-left text-gray-300 font-semibold py-4 px-4">Registrations</th>
                  <th className="text-left text-gray-300 font-semibold py-4 px-4">Revenue</th>
                  <th className="text-left text-gray-300 font-semibold py-4 px-4">Status</th>
                  <th className="text-left text-gray-300 font-semibold py-4 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myEvents.map((event) => (
                  <motion.tr
                    key={event.id}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                    className="border-b border-white/10"
                  >
                    <td className="py-4 px-4 text-white font-medium">{event.title}</td>
                    <td className="py-4 px-4 text-gray-300">{event.date}</td>
                    <td className="py-4 px-4 text-gray-300">{event.location}</td>
                    <td className="py-4 px-4 text-gray-300">{event.registrations}</td>
                    <td className="py-4 px-4 text-green-400 font-semibold">₹{event.revenue.toLocaleString('en-IN')}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${event.status === 'Active'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                        }`}>
                        {event.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(event.id)}
                          className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
