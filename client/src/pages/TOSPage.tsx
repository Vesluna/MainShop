import { motion } from 'framer-motion';
import { FiShield, FiAlertCircle, FiFileText, FiCheck, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { useToast } from '@/hooks/use-toast';

export default function TOSPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [_, setLocation] = useLocation();
  const { toast } = useToast();

  const toggleSection = (section: string) => {
    if (expanded === section) {
      setExpanded(null);
    } else {
      setExpanded(section);
    }
  };
  
  const handleAccept = () => {
    localStorage.setItem('tosAccepted', 'true');
    toast({
      title: "Terms Accepted",
      description: "You have accepted the Terms of Service.",
    });
    setLocation('/shop');
  };
  
  const handleDecline = () => {
    toast({
      title: "Terms Declined",
      description: "You must accept the Terms of Service to use the shop.",
      variant: "destructive",
    });
    setLocation('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-white">Terms of Service</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Please read these terms carefully before making any purchases
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="mb-8 flex items-center">
          <div className="bg-primary/20 p-3 rounded-full mr-4">
            <FiFileText className="text-primary h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-white">Terms & Conditions</h3>
        </div>

        <div className="space-y-6">
          <section className="border-b border-gray-700 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('introduction')}
            >
              <h4 className="text-lg font-medium text-white">1. Introduction</h4>
              <span className="text-gray-400">{expanded === 'introduction' ? '−' : '+'}</span>
            </button>
            
            {expanded === 'introduction' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-300"
              >
                <p className="mb-2">
                  These Terms of Service ("Terms") govern your use of our game pass shop and related services. 
                  By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p>
                  Our shop provides virtual game passes for use in Roblox and Scratch environments. These passes 
                  are voluntary digital items that enhance the gaming experience by providing cosmetic or functional benefits.
                </p>
              </motion.div>
            )}
          </section>

          <section className="border-b border-gray-700 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('purchases')}
            >
              <h4 className="text-lg font-medium text-white">2. Purchases & Donations</h4>
              <span className="text-gray-400">{expanded === 'purchases' ? '−' : '+'}</span>
            </button>
            
            {expanded === 'purchases' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-300"
              >
                <div className="flex items-start mb-2">
                  <FiAlertCircle className="text-yellow-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Voluntary Nature:</strong> All purchases and donations are voluntary and made at your discretion. 
                    These transactions are not gambling or games of chance.
                  </p>
                </div>
                <p className="mb-2">
                  <strong>No Refunds:</strong> All sales are final and non-refundable unless required by applicable law. 
                  If you encounter technical issues with your purchase, please contact our support team.
                </p>
                <p>
                  <strong>No Real-World Value:</strong> Virtual items have no monetary value outside of the platform. 
                  These items cannot be exchanged for real currency and are non-transferable.
                </p>
              </motion.div>
            )}
          </section>

          <section className="border-b border-gray-700 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('disclaimer')}
            >
              <h4 className="text-lg font-medium text-white">3. Disclaimers & Limitations</h4>
              <span className="text-gray-400">{expanded === 'disclaimer' ? '−' : '+'}</span>
            </button>
            
            {expanded === 'disclaimer' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-300"
              >
                <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-yellow-500 mb-3">
                  <p>
                    <strong>No Affiliation:</strong> We are not affiliated with, endorsed by, or officially connected with 
                    Roblox Corporation or the Scratch Foundation. All trademarks and copyrights belong to their respective owners.
                  </p>
                </div>
                <p className="mb-2">
                  <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, we shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages.
                </p>
                <p>
                  <strong>Service Changes:</strong> We reserve the right to modify, suspend, or discontinue any part of our services 
                  at any time without prior notice.
                </p>
              </motion.div>
            )}
          </section>

          <section className="border-b border-gray-700 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('user-conduct')}
            >
              <h4 className="text-lg font-medium text-white">4. User Conduct</h4>
              <span className="text-gray-400">{expanded === 'user-conduct' ? '−' : '+'}</span>
            </button>
            
            {expanded === 'user-conduct' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-300"
              >
                <p className="mb-2">
                  You agree not to attempt to defraud or abuse our services, engage in unauthorized access, 
                  or interfere with the proper functioning of our website.
                </p>
                <p>
                  Any attempt to circumvent protections, use automated tools, or exploit bugs will result in 
                  immediate termination of service and possible legal action.
                </p>
              </motion.div>
            )}
          </section>

          <section>
            <button 
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => toggleSection('contact')}
            >
              <h4 className="text-lg font-medium text-white">5. Contact & Reporting</h4>
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
                  For any questions, concerns, or reports related to these Terms, please contact us through 
                  our Scratch studio comments section.
                </p>
                <p>
                  We welcome feedback and will address legitimate concerns in a timely manner.
                </p>
              </motion.div>
            )}
          </section>
        </div>
        
        <div className="mt-8 p-4 bg-gray-700/50 rounded-lg border border-gray-600/30">
          <div className="flex items-center mb-3">
            <FiShield className="text-primary h-5 w-5 mr-2" />
            <h4 className="text-lg font-medium text-white">Agreement</h4>
          </div>
          <p className="text-gray-300 text-sm">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            If you do not agree with any part of these Terms, please refrain from using our services.
          </p>
          <p className="text-gray-400 text-xs mt-4 mb-6">
            Last Updated: April 29, 2025
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
            <motion.button
              onClick={handleDecline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white text-sm md:text-base rounded-lg transition-all hover:shadow-lg"
            >
              <FiX className="mr-2" />
              <span>Decline</span>
            </motion.button>
            
            <motion.button
              onClick={handleAccept}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white text-sm md:text-base rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <FiCheck className="mr-2" />
              <span>I Agree</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
