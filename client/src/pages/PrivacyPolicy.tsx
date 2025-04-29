import { motion } from 'framer-motion';
import { FiShield, FiLock, FiEye, FiUser, FiDatabase, FiAlertCircle, FiGlobe } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'wouter';

export default function PrivacyPolicy() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expanded === section) {
      setExpanded(null);
    } else {
      setExpanded(section);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-white">Privacy Policy</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          How we handle and protect your information
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="mb-8 flex items-center">
          <div className="bg-primary/20 p-3 rounded-full mr-4">
            <FiLock className="text-primary h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-white">Privacy & Security</h3>
        </div>

        <div className="bg-gray-700/30 p-5 rounded-lg border-l-4 border-primary mb-8">
          <p className="text-sm text-gray-200">
            Last Updated: April 29, 2025
          </p>
          <p className="text-gray-300 mt-2">
            KarmaTsukino ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
          </p>
        </div>

        <div className="space-y-6">
          <section className="border-b border-gray-700 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('information')}
            >
              <h4 className="text-lg font-medium text-white flex items-center">
                <FiDatabase className="mr-2 text-primary" />
                1. Information We Collect
              </h4>
              <span className="text-gray-400">{expanded === 'information' ? '−' : '+'}</span>
            </button>
            
            {expanded === 'information' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-300"
              >
                <p className="mb-2">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Access our website and use our services</li>
                  <li>Make purchases within our store</li>
                  <li>Contact us for customer support</li>
                  <li>Interact with our site in any other way</li>
                </ul>
                <p className="mt-3">
                  The information we collect may include your display name, Roblox username, 
                  purchase history, IP address, device information, and any other information
                  you choose to provide.
                </p>
              </motion.div>
            )}
          </section>

          <section className="border-b border-gray-700 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('usage')}
            >
              <h4 className="text-lg font-medium text-white flex items-center">
                <FiEye className="mr-2 text-primary" />
                2. How We Use Your Information
              </h4>
              <span className="text-gray-400">{expanded === 'usage' ? '−' : '+'}</span>
            </button>
            
            {expanded === 'usage' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-300"
              >
                <p className="mb-3">
                  We use the information we collect about you for various purposes, including to:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and fulfill orders</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Send you technical notices, updates, and administrative messages</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                </ul>
                <p className="mt-3">
                  We do not sell or rent your personal information to third parties.
                </p>
              </motion.div>
            )}
          </section>

          <section className="border-b border-gray-700 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('thirdparty')}
            >
              <h4 className="text-lg font-medium text-white flex items-center">
                <FiGlobe className="mr-2 text-primary" />
                3. Third-Party Services
              </h4>
              <span className="text-gray-400">{expanded === 'thirdparty' ? '−' : '+'}</span>
            </button>
            
            {expanded === 'thirdparty' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-300"
              >
                <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-yellow-500 mb-3">
                  <p>
                    <strong>External Platforms:</strong> Our services link to external platforms like Roblox and Scratch. 
                    When you access these platforms, you are subject to their respective privacy policies and terms of service.
                  </p>
                </div>
                <p className="mb-2">
                  We may use third-party services such as web hosting providers, payment processors, 
                  and analytics services. These services may collect information about you as governed 
                  by their respective privacy policies.
                </p>
                <p>
                  We are not responsible for the content or privacy practices of any third-party 
                  services or external websites that our website may link to.
                </p>
              </motion.div>
            )}
          </section>

          <section className="border-b border-gray-700 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('security')}
            >
              <h4 className="text-lg font-medium text-white flex items-center">
                <FiShield className="mr-2 text-primary" />
                4. Data Security
              </h4>
              <span className="text-gray-400">{expanded === 'security' ? '−' : '+'}</span>
            </button>
            
            {expanded === 'security' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-300"
              >
                <p className="mb-2">
                  We take reasonable measures to help protect information about you from loss, theft, misuse, 
                  and unauthorized access, disclosure, alteration, and destruction.
                </p>
                <p>
                  However, no data transmission over the Internet or storage system can be guaranteed to be 
                  100% secure. If you have reason to believe that your interaction with us is no longer secure, 
                  please immediately notify us.
                </p>
              </motion.div>
            )}
          </section>

          <section className="border-b border-gray-700 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('children')}
            >
              <h4 className="text-lg font-medium text-white flex items-center">
                <FiUser className="mr-2 text-primary" />
                5. Children's Privacy
              </h4>
              <span className="text-gray-400">{expanded === 'children' ? '−' : '+'}</span>
            </button>
            
            {expanded === 'children' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-300"
              >
                <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-yellow-500 mb-3">
                  <p className="flex items-start">
                    <FiAlertCircle className="text-yellow-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Important Notice:</strong> Our services are intended for users of all ages, including children. 
                      We take additional precautions to protect the privacy of young users.
                    </span>
                  </p>
                </div>
                <p className="mb-2">
                  We do not knowingly collect personal information from children under 13 without parental consent. 
                  If you are a parent or guardian and believe that your child has provided us with personal information, 
                  please contact us so that we can take appropriate action.
                </p>
                <p>
                  We encourage parents to supervise their children's online activities and to help enforce our Privacy Policy 
                  by instructing their children to never provide personal information without their permission.
                </p>
              </motion.div>
            )}
          </section>

          <section>
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('contact')}
            >
              <h4 className="text-lg font-medium text-white flex items-center">
                <FiAlertCircle className="mr-2 text-primary" />
                6. Contact Information
              </h4>
              <span className="text-gray-400">{expanded === 'contact' ? '−' : '+'}</span>
            </button>
            
            {expanded === 'contact' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-300"
              >
                <p className="mb-2">
                  If you have any questions or concerns about this Privacy Policy or our data practices, 
                  please contact us through our Scratch studio comments section at:
                </p>
                <a 
                  href="https://scratch.mit.edu/studios/36783153/comments" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-block mt-1 mb-4"
                >
                  https://scratch.mit.edu/studios/36783153/comments
                </a>
                <p>
                  We will respond to your inquiry as soon as reasonably possible.
                </p>
              </motion.div>
            )}
          </section>
        </div>
        
        <div className="mt-8 p-4 bg-gray-700/50 rounded-lg border border-gray-600/30">
          <p className="text-gray-300 text-sm">
            By using our website, you acknowledge that you have read and understood this Privacy Policy.
            We reserve the right to modify this policy at any time. Any changes will be posted on this page.
          </p>
        </div>
        
        <div className="mt-6 flex justify-center">
          <Link href="/shop">
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5">
              Return to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}