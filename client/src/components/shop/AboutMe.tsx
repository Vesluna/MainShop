import { motion } from 'framer-motion';
import { FiUser, FiCode, FiBookOpen, FiGithub, FiTwitter, FiYoutube, FiMessageSquare, FiAlertCircle } from 'react-icons/fi';
import { SiRobloxstudio, SiScratch } from 'react-icons/si';
import { 
  KARMA_ROBLOX_PROFILE, 
  KARMA_SCRATCH_PROFILE,
  KARMA_CONTACT_STUDIO,
  REPORT_TEMPLATE
} from '@/lib/gamePasses';

export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-white">About Me</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Learn more about KarmaTsukino and my creative journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Profile Section */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary/20 p-3 rounded-full mr-4">
              <FiUser className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">About KarmaTsukino</h3>
          </div>
          
          <p className="text-gray-300 mb-4">
            I'm a passionate game creator and developer with a focus on creating unique, engaging experiences. 
            My goal is to create games that tell stories and connect players through immersive worlds.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-6">
            <a 
              href={KARMA_ROBLOX_PROFILE} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-full text-white"
            >
              <SiRobloxstudio className="h-4 w-4" />
              <span>Roblox Profile</span>
            </a>
            <a 
              href={KARMA_SCRATCH_PROFILE}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-full text-white"
            >
              <SiScratch className="h-4 w-4" />
              <span>Scratch Profile</span>
            </a>
          </div>
        </motion.div>
        
        {/* Skills Section */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary/20 p-3 rounded-full mr-4">
              <FiCode className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Skills & Expertise</h3>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
              <span className="text-gray-300">Game Development</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
              <span className="text-gray-300">Creative Design</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
              <span className="text-gray-300">Roblox Studio Development</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
              <span className="text-gray-300">Scratch Programming</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
              <span className="text-gray-300">Digital Art & Animation</span>
            </li>
          </ul>
        </motion.div>
        
        {/* Projects Section */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 shadow-lg md:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary/20 p-3 rounded-full mr-4">
              <FiBookOpen className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Featured Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-lg font-medium text-white mb-2">Dusk</h4>
              <p className="text-gray-300 text-sm mb-3">
                A horror survival game where players complete tasks to earn coins and reduce time, all while evading a relentless killer.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Platform: Scratch</span>
                <a 
                  href={KARMA_SCRATCH_PROFILE}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary text-sm hover:underline"
                >
                  Coming Soon
                </a>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-lg font-medium text-white mb-2">Pixel Journey</h4>
              <p className="text-gray-300 text-sm mb-3">
                A retro-style platformer with unique mechanics built in Scratch, featuring handcrafted pixel art and original music.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Platform: Scratch</span>
                <a 
                  href={KARMA_SCRATCH_PROFILE}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary text-sm hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Contact & Reporting Section */}
      <motion.div
        className="max-w-4xl mx-auto mt-12 bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="bg-primary/10 p-5 border-b border-gray-700">
          <div className="flex items-center">
            <div className="bg-primary/20 p-3 rounded-full mr-4">
              <FiMessageSquare className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Contact & Support</h3>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                <FiAlertCircle className="mr-2 text-yellow-500" />
                Report an Issue
              </h4>
              <p className="text-gray-300 mb-4">
                Found a bug or have a concern? Please let me know by posting in the Scratch studio comments.
                I appreciate your feedback to help improve the experience for everyone.
              </p>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30 mb-5">
                <h5 className="font-medium text-white mb-2">Reporting Template:</h5>
                <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono bg-gray-800/70 p-3 rounded overflow-auto max-h-32">
                  {REPORT_TEMPLATE}
                </pre>
              </div>
              <a 
                href={KARMA_CONTACT_STUDIO}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 transition-colors px-5 py-2.5 rounded-lg text-white font-medium"
              >
                <FiMessageSquare className="h-4 w-4" />
                <span>Go to Support Studio</span>
              </a>
            </div>
            
            <div className="bg-gray-700/30 rounded-lg p-5">
              <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
              <p className="text-gray-300 mb-5">
                Follow me on these platforms to stay updated on new games, projects, and announcements.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={KARMA_SCRATCH_PROFILE}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 transition-all p-3 rounded-full hover:shadow-lg hover:-translate-y-1"
                >
                  <SiScratch className="h-6 w-6 text-white" />
                </a>
                <a 
                  href={KARMA_ROBLOX_PROFILE}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 transition-all p-3 rounded-full hover:shadow-lg hover:-translate-y-1"
                >
                  <SiRobloxstudio className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="#"
                  className="bg-gray-700 hover:bg-gray-600 transition-all p-3 rounded-full hover:shadow-lg hover:-translate-y-1"
                >
                  <FiYoutube className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="#"
                  className="bg-gray-700 hover:bg-gray-600 transition-all p-3 rounded-full hover:shadow-lg hover:-translate-y-1"
                >
                  <FiTwitter className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}