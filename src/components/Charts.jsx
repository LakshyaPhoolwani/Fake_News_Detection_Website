import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, CheckCircle, Users, Globe, Calendar } from 'lucide-react';

const Charts = () => {
  // Sample data for visualizations
  const detectionStats = [
    { label: 'Text Analysis', value: 85, color: 'bg-blue-500' },
    { label: 'Image Detection', value: 92, color: 'bg-green-500' },
    { label: 'Video Analysis', value: 78, color: 'bg-purple-500' },
    { label: 'Audio Detection', value: 88, color: 'bg-yellow-500' }
  ];

  const monthlyData = [
    { month: 'Jan', fake: 1200, real: 3800, suspicious: 800 },
    { month: 'Feb', fake: 1500, real: 4200, suspicious: 900 },
    { month: 'Mar', fake: 1800, real: 4600, suspicious: 1100 },
    { month: 'Apr', fake: 2100, real: 5000, suspicious: 1300 },
    { month: 'May', fake: 1900, real: 5400, suspicious: 1200 },
    { month: 'Jun', fake: 2300, real: 5800, suspicious: 1400 }
  ];

  const contentTypes = [
    { type: 'News Articles', percentage: 45, color: 'text-blue-400', bg: 'bg-blue-500' },
    { type: 'Social Media', percentage: 30, color: 'text-green-400', bg: 'bg-green-500' },
    { type: 'Images/Memes', percentage: 15, color: 'text-purple-400', bg: 'bg-purple-500' },
    { type: 'Videos', percentage: 10, color: 'text-yellow-400', bg: 'bg-yellow-500' }
  ];

  const globalStats = [
    { region: 'North America', accuracy: 94, volume: 2.1 },
    { region: 'Europe', accuracy: 91, volume: 1.8 },
    { region: 'Asia Pacific', accuracy: 89, volume: 3.2 },
    { region: 'Latin America', accuracy: 87, volume: 1.2 },
    { region: 'Africa', accuracy: 85, volume: 0.8 }
  ];

  const maxVolume = Math.max(...globalStats.map(stat => stat.volume));

  return (
    <div className="space-y-16">
      {/* Detection Accuracy by Type - Horizontal Bar Chart */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
      >
        <div className="flex items-center space-x-3 mb-8">
          <TrendingUp className="h-6 w-6 text-blue-400" />
          <h3 className="text-2xl font-bold text-white">Detection Accuracy by Content Type</h3>
        </div>
        
        <div className="space-y-6">
          {detectionStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">{stat.label}</span>
                <span className="text-white font-bold">{stat.value}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`h-4 rounded-full ${stat.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Monthly Detection Volume - Bar Chart */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
      >
        <div className="flex items-center space-x-3 mb-8">
          <Calendar className="h-6 w-6 text-green-400" />
          <h3 className="text-2xl font-bold text-white">Monthly Detection Volume (2024)</h3>
        </div>
        
        <div className="flex items-end justify-between space-x-2 h-64">
          {monthlyData.map((data, index) => {
            const total = data.fake + data.real + data.suspicious;
            const maxTotal = Math.max(...monthlyData.map(d => d.fake + d.real + d.suspicious));
            const height = (total / maxTotal) * 100;
            
            return (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 flex flex-col items-center space-y-2"
              >
                <div className="w-full bg-gray-700 rounded-t-lg overflow-hidden relative" style={{ height: `${height}%` }}>
                  <div 
                    className="bg-red-500 w-full absolute bottom-0"
                    style={{ height: `${(data.fake / total) * 100}%` }}
                  ></div>
                  <div 
                    className="bg-yellow-500 w-full absolute bottom-0"
                    style={{ 
                      height: `${((data.fake + data.suspicious) / total) * 100}%`,
                      bottom: `${(data.fake / total) * 100}%`
                    }}
                  ></div>
                  <div 
                    className="bg-green-500 w-full absolute bottom-0"
                    style={{ 
                      height: `${(data.real / total) * 100}%`,
                      bottom: `${((data.fake + data.suspicious) / total) * 100}%`
                    }}
                  ></div>
                </div>
                <span className="text-gray-300 text-sm font-medium">{data.month}</span>
                <span className="text-gray-400 text-xs">{(total / 1000).toFixed(1)}K</span>
              </motion.div>
            );
          })}
        </div>
        
        <div className="flex justify-center space-x-6 mt-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-300 text-sm">Real Content</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-300 text-sm">Suspicious</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-300 text-sm">Fake Content</span>
          </div>
        </div>
      </motion.div>

      {/* Content Types Distribution - Pie Chart */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
      >
        <div className="flex items-center space-x-3 mb-8">
          <AlertTriangle className="h-6 w-6 text-purple-400" />
          <h3 className="text-2xl font-bold text-white">Content Types Analyzed</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Pie Chart */}
          <div className="relative">
            <div className="w-64 h-64 mx-auto relative">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {contentTypes.reduce((acc, item, index) => {
                  const prevPercentage = contentTypes.slice(0, index).reduce((sum, prev) => sum + prev.percentage, 0);
                  const strokeDasharray = `${item.percentage} ${100 - item.percentage}`;
                  const strokeDashoffset = -prevPercentage;
                  
                  acc.push(
                    <motion.circle
                      key={index}
                      cx="50"
                      cy="50"
                      r="15.915"
                      fill="transparent"
                      stroke={item.bg.replace('bg-', '').replace('-500', '')}
                      strokeWidth="8"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className={item.bg.replace('bg-', 'stroke-')}
                      initial={{ strokeDasharray: "0 100" }}
                      whileInView={{ strokeDasharray: strokeDasharray }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  );
                  return acc;
                }, [])}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-gray-400 text-sm">Coverage</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="space-y-4">
            {contentTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${item.bg}`}></div>
                  <span className="text-gray-300 font-medium">{item.type}</span>
                </div>
                <span className={`font-bold ${item.color}`}>{item.percentage}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Global Performance - Regional Bar Chart */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
      >
        <div className="flex items-center space-x-3 mb-8">
          <Globe className="h-6 w-6 text-cyan-400" />
          <h3 className="text-2xl font-bold text-white">Global Performance by Region</h3>
        </div>
        
        <div className="space-y-6">
          {globalStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">{stat.region}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-cyan-400 font-bold">{stat.accuracy}% accuracy</span>
                  <span className="text-gray-400 text-sm">{stat.volume}M analyzed</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Accuracy Bar */}
                <div className="space-y-1">
                  <div className="text-xs text-gray-400">Accuracy</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.accuracy}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    ></motion.div>
                  </div>
                </div>
                
                {/* Volume Bar */}
                <div className="space-y-1">
                  <div className="text-xs text-gray-400">Volume</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(stat.volume / maxVolume) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Real-time Statistics */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { 
            icon: CheckCircle, 
            label: 'Content Verified Today', 
            value: '47,392', 
            change: '+12.5%',
            color: 'text-green-400',
            bg: 'bg-green-500/10'
          },
          { 
            icon: AlertTriangle, 
            label: 'Fake Content Detected', 
            value: '8,247', 
            change: '-3.2%',
            color: 'text-red-400',
            bg: 'bg-red-500/10'
          },
          { 
            icon: Users, 
            label: 'Active Users', 
            value: '2.1M', 
            change: '+18.7%',
            color: 'text-blue-400',
            bg: 'bg-blue-500/10'
          }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`${stat.bg} backdrop-blur-md border border-gray-700 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}
          >
            <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
            <div className="space-y-2">
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
              <div className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change} from yesterday
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Charts;