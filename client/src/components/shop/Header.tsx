import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiInfo, FiShoppingBag } from 'react-icons/fi';

interface HeaderProps {
  onCategoryClick: () => void;
  onAboutClick: () => void;
  onInfoClick: () => void;
  activeSection: 'categories' | 'gamepasses' | 'about' | 'info';
}

export default function Header({ 
  onCategoryClick, 
  onAboutClick, 
  onInfoClick,
  activeSection
}: HeaderProps) {
  
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Name */}
          <div 
            className="text-xl font-bold text-white cursor-pointer flex items-center"
            onClick={onCategoryClick}
          >
            <span className="text-primary mr-2">Karma</span>Tsukino
          </div>
          
          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={onCategoryClick}
              className={`flex items-center text-sm font-medium transition-colors ${
                activeSection === 'categories' || activeSection === 'gamepasses'
                  ? 'text-primary'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <FiHome className="mr-2 h-4 w-4" />
              <span>Home</span>
            </button>
            
            <button
              onClick={onAboutClick}
              className={`flex items-center text-sm font-medium transition-colors ${
                activeSection === 'about'
                  ? 'text-primary'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <FiUser className="mr-2 h-4 w-4" />
              <span>About Me</span>
            </button>
            
            <button
              onClick={onInfoClick}
              className={`flex items-center text-sm font-medium transition-colors ${
                activeSection === 'info'
                  ? 'text-primary'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <FiInfo className="mr-2 h-4 w-4" />
              <span>Information</span>
            </button>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <button 
              onClick={onCategoryClick}
              className={`p-2 rounded-full ${
                activeSection === 'categories' || activeSection === 'gamepasses'
                  ? 'bg-primary/20 text-primary'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <FiHome className="h-5 w-5" />
            </button>
            
            <button 
              onClick={onAboutClick}
              className={`p-2 rounded-full ml-3 ${
                activeSection === 'about'
                  ? 'bg-primary/20 text-primary'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <FiUser className="h-5 w-5" />
            </button>
            
            <button 
              onClick={onInfoClick}
              className={`p-2 rounded-full ml-3 ${
                activeSection === 'info'
                  ? 'bg-primary/20 text-primary'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <FiInfo className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}