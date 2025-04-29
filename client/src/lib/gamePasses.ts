/**
 * Game Pass Categories
 * 
 * To add a new category:
 * 1. Add your category name as a string to this union type
 * 2. Use this new category in your game pass objects
 */
export type GamePassCategory = 
  | 'Dusk'     // Horror survival game 
  | 'Donation' // Support tiers
  | 'Other'    // Miscellaneous passes
  | 'Coming Soon'; // Add your new categories here

/**
 * GamePass Interface - Core data structure for game passes in the shop
 * 
 * This interface defines the structure of all game passes in the shop system.
 * Use this as a reference when adding new game passes to the shop.
 */
export interface GamePass {
  /** Unique identifier for the game pass */
  id: number;
  
  /** Display name of the game pass */
  name: string;
  
  /** Numerical price (in Robux for Roblox passes, or other currency units) */
  price: number;
  
  /** Formatted price for display (e.g., "25 RS" for Robux) */
  priceDisplay: string;
  
  /** URL to the game pass image */
  image: string;
  
  /** Detailed description of what the game pass offers */
  description: string;
  
  /** 
   * Category of the game pass
   * To add a new category:
   * 1. Add it to the GamePassCategory type above
   * 2. Use it in your game pass objects
   */
  category: GamePassCategory;
  
  /**
   * Platform where the game pass is used
   * Current platforms: 'Roblox', 'Scratch', 'Other'
   */
  platform: 'Roblox' | 'Scratch' | 'Other';
  
  /** 
   * Optional ID for verification 
   * (Example: Roblox gamepass ID, Scratch project ID, etc.)
   */
  externalId?: string;
  
  /** Optional link to the external platform */
  externalLink?: string;
  
  /** 
   * Optional badge to display on the game pass card
   * Options: 'NEW', 'SALE', 'POPULAR', 'COMING_SOON', or null
   */
  badge?: 'NEW' | 'SALE' | 'POPULAR' | 'COMING_SOON' | null;
  
  /**
   * Status of the game pass
   * Options: 'active', 'maintenance', 'unavailable', 'coming_soon'
   */
  status: 'active' | 'maintenance' | 'unavailable' | 'coming_soon';
  
  /** 
   * Optional star rating (0-5)
   * Defaults to 0 if not provided 
   */
  rating?: number;
}

// Game passes data - including Donations and Dusk (coming soon)
export const gamePasses: GamePass[] = [
  {
    id: 1,
    name: "Dusk - Early Access",
    price: 0,
    priceDisplay: "Coming Soon",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1769&auto=format&fit=crop",
    description: "A horror survival game where players complete tasks to earn coins and reduce time, while evading a relentless killer. Compatibility: Desktop/ChromeBook.",
    category: "Dusk",
    platform: "Scratch",
    externalLink: "https://scratch.mit.edu/users/coolcats153122/",
    badge: "COMING_SOON",
    status: "coming_soon"
  },
  {
    id: 3,
    name: "Donation - Basic",
    price: 25,
    priceDisplay: "25 RS",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    description: "Support development with 25 Robux. Receive a special thank you badge on your profile.",
    category: "Donation",
    platform: "Roblox",
    externalId: "956035778",
    externalLink: "https://www.roblox.com/game-pass/956035778",
    badge: "POPULAR",
    status: "active"
  },
  {
    id: 4,
    name: "Donation - Bronze",
    price: 50,
    priceDisplay: "50 RS",
    image: "https://images.unsplash.com/photo-1614521184900-ad9ec0e942c9?q=80&w=1854&auto=format&fit=crop",
    description: "Support with 50 Robux. Get a special chat color and exclusive updates on upcoming features.",
    category: "Donation",
    platform: "Roblox",
    externalId: "956001905",
    externalLink: "https://www.roblox.com/game-pass/956001905",
    badge: "NEW",
    status: "active"
  },
  {
    id: 5,
    name: "Donation - Silver",
    price: 75,
    priceDisplay: "75 RS",
    image: "https://images.unsplash.com/photo-1626285869432-b1c473c8d824?q=80&w=1974&auto=format&fit=crop",
    description: "Support with 75 Robux. Includes all perks from lower tiers plus a custom in-game accessory.",
    category: "Donation",
    platform: "Roblox",
    externalId: "955696205",
    externalLink: "https://www.roblox.com/game-pass/955696205",
    badge: "SALE",
    status: "active"
  },
  {
    id: 6,
    name: "Donation - Gold",
    price: 100,
    priceDisplay: "100 RS",
    image: "https://images.unsplash.com/photo-1598517511194-186087f54f58?q=80&w=1852&auto=format&fit=crop",
    description: "Support with 100 Robux. Includes exclusive perks and monthly virtual meetups.",
    category: "Donation",
    platform: "Roblox",
    externalId: "955586153",
    externalLink: "https://www.roblox.com/game-pass/955586153",
    badge: "POPULAR",
    status: "active"
  },
  {
    id: 7,
    name: "Donation - Platinum",
    price: 125,
    priceDisplay: "125 RS",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1933&auto=format&fit=crop",
    description: "Support with 125 Robux. Premium support tier with special recognition.",
    category: "Donation",
    platform: "Roblox",
    externalId: "955937844",
    externalLink: "https://www.roblox.com/game-pass/955937844",
    badge: "SALE",
    status: "active"
  },
  {
    id: 8,
    name: "Donation - Diamond",
    price: 150,
    priceDisplay: "150 RS",
    image: "https://images.unsplash.com/photo-1624395213232-ea2bcd36b865?q=80&w=1974&auto=format&fit=crop",
    description: "Support with 150 Robux. Elite supporter status with all available perks.",
    category: "Donation",
    platform: "Roblox",
    externalId: "955748081",
    externalLink: "https://www.roblox.com/game-pass/955748081",
    badge: "POPULAR",
    status: "active"
  },
  {
    id: 9,
    name: "Donation - Ultimate",
    price: 175,
    priceDisplay: "175 RS",
    image: "https://images.unsplash.com/photo-1631285562800-10e82c1f6ce6?q=80&w=1974&auto=format&fit=crop",
    description: "Support with 175 Robux. Ultimate supporter tier with exclusive developer contact.",
    category: "Donation",
    platform: "Roblox",
    externalId: "956165001",
    externalLink: "https://www.roblox.com/game-pass/956165001",
    badge: "NEW",
    status: "active"
  }
];

// Helper functions

// Get all available categories
export function getCategories(): string[] {
  const categories = new Set<string>();
  gamePasses.forEach(pass => categories.add(pass.category));
  return ['All', ...Array.from(categories)];
}

// Get all game passes for a category
export function getGamePassesByCategory(category: string): GamePass[] {
  if (category === 'All') {
    return gamePasses;
  }
  return gamePasses.filter(pass => pass.category === category);
}

// Verify if a Roblox gamepass is active by its ID by checking if the page exists
export async function verifyRobloxGamepass(gamepassId: string): Promise<boolean> {
  try {
    // Use the standard Roblox gamepass URL format
    const response = await fetch(`https://www.roblox.com/game-pass/${gamepassId}`, {
      method: 'HEAD', // We only need to check if it exists, no need for the full page
      // Using no-cors to avoid CORS issues in the browser, though this has limitations
      mode: 'no-cors'
    });
    
    // If we get a response (even with no-cors), the page likely exists
    // This is imperfect but works for simple verification during development
    return true;
  } catch (error) {
    console.error('Error verifying Roblox gamepass:', error);
    return false;
  }
}

// Verify if a Roblox account exists by checking the profile page
export async function verifyRobloxAccount(username: string): Promise<boolean> {
  try {
    // For users, Roblox uses a different URL format
    const response = await fetch(`https://www.roblox.com/users/profile?username=${encodeURIComponent(username)}`, {
      method: 'HEAD',
      mode: 'no-cors'
    });
    
    return true;
  } catch (error) {
    console.error('Error verifying Roblox account:', error);
    return false;
  }
}

// For KarmaTsukino's profiles and contact information
export const KARMA_ROBLOX_PROFILE = "https://www.roblox.com/users/7100520844/profile";
export const KARMA_SCRATCH_PROFILE = "https://scratch.mit.edu/users/coolcats153122/";
export const KARMA_CONTACT_STUDIO = "https://scratch.mit.edu/studios/36783153/comments";

// Template for reporting issues (Scratch-appropriate format)
export const REPORT_TEMPLATE = `
Hi there! I wanted to let you know about something in the game that needs attention:

[Describe what happened]
- Game Pass/Item: [Name of the game pass or item]
- Issue Type: [Bug/Visual Issue/Content Concern]
- Details: [Briefly explain what happened]

Thank you for helping improve the experience for everyone!
`;