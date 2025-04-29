import { motion } from 'framer-motion';
import { FiInfo, FiCreditCard, FiAlertTriangle, FiHelpCircle, FiShield, FiMessageSquare } from 'react-icons/fi';
import { SiScratch } from 'react-icons/si';
import { KARMA_CONTACT_STUDIO, REPORT_TEMPLATE } from '@/lib/gamePasses';

export default function Information() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-white">Information</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Important details about purchases, support, and legal information
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Purchase Information */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary/20 p-3 rounded-full mr-4">
              <FiCreditCard className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Purchase Information</h3>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              When you purchase a game pass, you're supporting the creator directly. Here's what you need to know:
            </p>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">How it works:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Select the game pass you want to purchase</li>
                <li>Click "Add to Cart" to add it to your shopping cart</li>
                <li>Review your cart and proceed to checkout</li>
                <li>Complete the purchase using your preferred payment method</li>
                <li>You'll receive instructions on how to claim your game pass</li>
              </ol>
            </div>
            
            <p className="text-sm">
              <strong className="text-white">Note:</strong> Roblox game passes require a Roblox account. You'll need to link your Roblox account 
              to claim these passes. Scratch projects don't require an account but may have specific instructions.
            </p>
          </div>
        </motion.div>
        
        {/* Legal Information */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary/20 p-3 rounded-full mr-4">
              <FiShield className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Legal Information</h3>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Important Disclaimers:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>All purchases are voluntary and non-refundable unless required by law</li>
                <li>Game passes do not constitute gambling or games of chance</li>
                <li>Virtual items have no real-world monetary value outside of the platform</li>
                <li>KarmaTsukino is not affiliated with Roblox Corporation or the Scratch Foundation</li>
                <li>All trademarks and copyrights belong to their respective owners</li>
              </ul>
            </div>
            
            <p className="text-sm">
              By making a purchase, you agree to the terms and conditions presented during checkout.
              For specific legal questions, please contact us directly.
            </p>
          </div>
        </motion.div>
        
        {/* FAQs */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary/20 p-3 rounded-full mr-4">
              <FiHelpCircle className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-2">How do I claim my game pass?</h4>
              <p className="text-gray-300 text-sm">
                After purchase, you'll receive a unique code or instructions on how to claim your game pass.
                For Roblox passes, you'll typically need to join a specific game or group.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2">Can I get a refund?</h4>
              <p className="text-gray-300 text-sm">
                Generally, all sales are final. However, if you experience technical issues preventing you from
                claiming your game pass, please contact us for assistance.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2">Do game passes expire?</h4>
              <p className="text-gray-300 text-sm">
                Most game passes do not expire and remain permanently linked to your account. However, 
                if a game is discontinued or significantly updated, some features may change.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2">What payment methods are accepted?</h4>
              <p className="text-gray-300 text-sm">
                We accept major credit cards, PayPal, and other payment methods depending on your region.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Information */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary/20 p-3 rounded-full mr-4">
              <FiInfo className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Support Information</h3>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Need help with a purchase or have questions? Here's how to reach us:
            </p>
            
            <div className="bg-gray-700/70 p-5 rounded-lg border border-gray-600/30 shadow-inner mb-4">
              <div className="flex items-center mb-3">
                <SiScratch className="h-5 w-5 text-primary mr-3" />
                <h4 className="font-medium text-white">Scratch Studio Support</h4>
              </div>
              <p className="mb-3">
                For all support inquiries, please visit our Scratch studio comments section. We monitor these comments regularly and will respond to your questions or concerns.
              </p>
              
              <div className="bg-gray-800/60 p-4 rounded-lg mb-4 border-l-2 border-primary">
                <h5 className="font-medium text-white text-sm mb-2">How to report an issue:</h5>
                <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono bg-gray-800 p-3 rounded overflow-auto max-h-32">
                  {REPORT_TEMPLATE}
                </pre>
              </div>
              
              <a 
                href={KARMA_CONTACT_STUDIO}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 transition-colors px-4 py-2 rounded-lg text-white font-medium text-sm"
              >
                <FiMessageSquare className="h-4 w-4" />
                <span>Visit Support Studio</span>
              </a>
            </div>
            
            <p className="text-sm bg-gray-700/50 p-3 rounded-lg">
              <strong className="text-white">Response Time:</strong> We typically respond to support requests within 24-48 hours. For urgent issues, please make sure to include "URGENT" in your message title.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}