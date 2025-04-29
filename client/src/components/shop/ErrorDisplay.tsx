import { motion } from 'framer-motion';
import { FiAlertTriangle, FiRefreshCw, FiClock, FiLock } from 'react-icons/fi';

type ErrorType = 'unavailable' | 'maintenance' | 'not-found' | 'account-deleted';

interface ErrorDisplayProps {
  type: ErrorType;
  title?: string;
  message?: string;
  actionText?: string;
  onAction?: () => void;
}

export default function ErrorDisplay({
  type,
  title,
  message,
  actionText = 'Try Again',
  onAction
}: ErrorDisplayProps) {
  // Default error content based on type
  const getErrorContent = () => {
    switch(type) {
      case 'unavailable':
        return {
          icon: <FiAlertTriangle className="text-red-500 text-4xl mb-4" />,
          defaultTitle: 'Game Pass Unavailable',
          defaultMessage: 'This game pass is currently unavailable. It may have been removed by the creator or is no longer supported.',
        };
      case 'maintenance':
        return {
          icon: <FiClock className="text-yellow-500 text-4xl mb-4" />,
          defaultTitle: 'Under Maintenance',
          defaultMessage: 'This game is currently under maintenance. Please check back later when the developer has completed the updates.',
        };
      case 'not-found':
        return {
          icon: <FiAlertTriangle className="text-blue-500 text-4xl mb-4" />,
          defaultTitle: 'Game Pass Not Found',
          defaultMessage: 'The requested game pass could not be found. It may have been removed or never existed.',
        };
      case 'account-deleted':
        return {
          icon: <FiLock className="text-gray-500 text-4xl mb-4" />,
          defaultTitle: 'Roblox Account Unavailable',
          defaultMessage: 'The Roblox account associated with this content is no longer available. The game passes cannot be purchased at this time.',
        };
      default:
        return {
          icon: <FiAlertTriangle className="text-red-500 text-4xl mb-4" />,
          defaultTitle: 'Error Occurred',
          defaultMessage: 'An unexpected error has occurred. Please try again later.',
        };
    }
  };

  const { icon, defaultTitle, defaultMessage } = getErrorContent();
  const errorTitle = title || defaultTitle;
  const errorMessage = message || defaultMessage;

  return (
    <motion.div
      className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-8 max-w-md mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {icon}
      
      <h3 className="text-xl font-semibold mb-2 text-white">
        {errorTitle}
      </h3>
      
      <p className="text-gray-300 mb-6">
        {errorMessage}
      </p>
      
      {onAction && (
        <button
          onClick={onAction}
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors mx-auto"
        >
          <FiRefreshCw className="animate-spin" />
          <span>{actionText}</span>
        </button>
      )}
    </motion.div>
  );
}