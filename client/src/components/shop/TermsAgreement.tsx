import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiCheck, FiX, FiShield, FiFileText } from 'react-icons/fi';

interface TermsAgreementProps {
  visible: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

export default function TermsAgreement({ visible, onAccept, onDecline }: TermsAgreementProps) {
  const [checked, setChecked] = useState(false);
  
  if (!visible) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[990] flex items-center justify-center p-4">
      <motion.div 
        className="bg-gray-800 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-gray-700/70"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", damping: 20 }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gradient-to-r from-gray-700/80 to-gray-800">
          <div className="flex items-center space-x-3">
            <div className="bg-primary/20 p-2.5 rounded-full">
              <FiFileText className="text-primary text-xl" />
            </div>
            <h2 className="text-xl font-bold text-white">Terms of Service</h2>
          </div>
          <button 
            onClick={onDecline}
            className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-gray-700/50 rounded-full"
          >
            <FiX className="text-xl" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-grow custom-scrollbar">
          <div className="space-y-5 text-gray-300">
            <p className="font-semibold text-lg text-white mb-4">
              Please read these terms carefully before using KarmaTsukino's products.
            </p>
            
            <div className="bg-gray-700/30 p-5 rounded-lg border-l-4 border-primary mb-6">
              <p className="text-sm text-gray-200">
                By clicking <span className="font-semibold text-white">"I Agree"</span> below, you confirm that you have read, understood, and agree to be bound by these terms.
                You will not have to view this again until your next visit.
              </p>
            </div>
            
            <section className="space-y-2">
              <h3 className="font-bold text-white flex items-center">
                <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center text-xs text-primary">1</span>
                Purchase Agreement
              </h3>
              <p className="ml-7">By purchasing any digital item from this website, you acknowledge that these are virtual goods for use within specific platforms (Roblox, Scratch, etc.) and are non-refundable.</p>
            </section>
            
            <section className="space-y-2">
              <h3 className="font-bold text-white flex items-center">
                <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center text-xs text-primary">2</span>
                Voluntary Purchase & Responsibility
              </h3>
              <p className="ml-7">
                All purchases made on this site are entirely voluntary and at your sole discretion. 
                By making a purchase, you agree that it is your choice, not ours. You cannot report us for "theft" or "scamming" 
                as you willingly purchased these items. <span className="font-semibold text-white">These purchases are not gambling</span> or games of chance. 
                We do not condone gambling or inappropriate content of any kind.
              </p>
            </section>
            
            <section className="space-y-2">
              <h3 className="font-bold text-white flex items-center">
                <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center text-xs text-primary">3</span>
                No Guarantees
              </h3>
              <p className="ml-7">All items are provided "as is" without warranty of any kind. There are no guarantees that these items will meet your expectations or requirements.</p>
            </section>
            
            <section className="space-y-2">
              <h3 className="font-bold text-white flex items-center">
                <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center text-xs text-primary">4</span>
                Service Availability
              </h3>
              <p className="ml-7">Items may become temporarily or permanently unavailable due to platform changes, game updates, or account modifications. The seller is not responsible for any service interruptions outside their control.</p>
            </section>
            
            <section className="space-y-2">
              <h3 className="font-bold text-white flex items-center">
                <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center text-xs text-primary">5</span>
                Account Verification
              </h3>
              <p className="ml-7">This website may verify the existence and validity of linked Roblox accounts and gamepasses. This is done to ensure products are available before purchase.</p>
            </section>
            
            <section className="space-y-2">
              <h3 className="font-bold text-white flex items-center">
                <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center text-xs text-primary">6</span>
                Content Limitations
              </h3>
              <p className="ml-7">The owner has the right to modify, remove, or replace content at any time. Purchased items may be subject to changes or updates.</p>
            </section>
            
            <section className="space-y-2">
              <h3 className="font-bold text-white flex items-center">
                <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center text-xs text-primary">7</span>
                External Platforms
              </h3>
              <p className="ml-7">
                We are not affiliated with, endorsed by, or officially connected with Roblox Corporation or the Scratch Foundation. 
                All trademarks and copyrights belong to their respective owners.
              </p>
            </section>
            
            <div className="border-t border-gray-700 pt-5 mt-6">
              <p className="italic text-sm text-gray-400">
                Last updated: April 29, 2025
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-5 border-t border-gray-700 bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <label className="flex items-center space-x-3 cursor-pointer group" onClick={() => setChecked(!checked)}>
            <div className={`w-5 h-5 rounded border transition-colors ${checked ? 'bg-primary border-primary' : 'border-gray-600 group-hover:border-gray-500'} flex items-center justify-center`}>
              {checked && <FiCheck className="text-white text-sm" />}
            </div>
            <span className="text-sm text-gray-300">I have read and agree to the terms</span>
          </label>
          
          <div className="flex space-x-3">
            <button
              onClick={onDecline}
              className="px-4 py-2.5 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={onAccept}
              disabled={!checked}
              className={`px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-all ${
                checked 
                  ? 'bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5' 
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              <FiShield className={checked ? 'text-white' : 'text-gray-500'} />
              <span>I Agree</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}