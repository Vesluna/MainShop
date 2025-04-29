import { FiHeart } from 'react-icons/fi';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <span className="text-xl font-bold">Karma<span className="text-primary">Tsukino</span></span>
          </div>
          
          <p className="text-gray-400 text-sm mb-4 max-w-md">
            This site is designed for game pass purchases on Roblox. All purchases are voluntary and non-refundable.
          </p>
          
          <div className="flex items-center justify-center mb-4 space-x-4">
            <a href="https://www.roblox.com/users/7100520844/profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              Roblox Profile
            </a>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
              Terms of Service
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </Link>
          </div>
          
          <div className="text-gray-500 text-xs">
            <p>© {currentYear} KarmaTsukino. All rights reserved.</p>
            <p className="mt-1 flex items-center justify-center">
              Made with <FiHeart className="mx-1 text-red-500" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
