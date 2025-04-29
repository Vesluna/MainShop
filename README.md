# KarmaTsukino Game Pass Shop

A modern, interactive online shop for game passes with a cinematic introduction sequence. The shop features Roblox game passes, donation options, and information about upcoming Scratch projects.

![Game Pass Shop Screenshot](screenshot.png) <!-- Replace this with an actual screenshot of your app -->

## Features

- ✨ Cinematic eye-opening animation intro sequence
- 🎮 Browsable game passes for Roblox and Scratch
- 💰 Multiple donation tiers with Roblox integration
- ⭐ Star rating system for all game passes
- 📱 Fully responsive design (mobile and desktop support)
- 🌓 Dark mode for comfortable viewing
- 🛒 Interactive browsing experience
- 📜 Comprehensive Terms of Service and Privacy Policy
- 🔒 Safety features for external purchases
- 🎵 Background music player with custom tracks

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Wouter](https://github.com/molefrog/wouter) - Routing
- [GSAP](https://greensock.com/gsap/) - Advanced animations
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - Background music player

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/karmatsukino-shop.git
   cd karmatsukino-shop
   ```

2. Install dependencies
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open http://localhost:5000 in your browser

## How to Add New Game Passes

To add new game passes to the shop, edit the `client/src/lib/gamePasses.ts` file:

```typescript
// Add a new game pass to the gamePasses array
export const gamePasses: GamePass[] = [
  // Existing game passes...
  
  // Add your new game pass here
  {
    id: 10, // Make sure this is a unique ID
    name: "Your New Game Pass",
    price: 100,
    priceDisplay: "100 RS", // For Robux
    image: "URL_TO_YOUR_IMAGE",
    description: "Description of your new game pass",
    category: "Donation", // or "Dusk" or "Other" or add a new category
    platform: "Roblox", // or "Scratch" or "Other"
    externalId: "YOUR_ROBLOX_GAMEPASS_ID", // Optional
    externalLink: "https://www.roblox.com/game-pass/YOUR_ID",
    badge: "NEW", // Optional: "NEW", "SALE", "POPULAR", "COMING_SOON", or null
    status: "active" // "active", "maintenance", "unavailable", or "coming_soon"
  }
]
```

## Project Structure

```
karmatsukino-shop/
├── client/               # Frontend code
│   ├── public/           # Static files
│   │   └── music/        # Background music files
│   └── src/
│       ├── components/   # React components
│       │   ├── intro/    # Intro animation components
│       │   ├── shop/     # Shop UI components
│       │   └── ui/       # Reusable UI components
│       │       └── MusicPlayer.tsx  # Background music player component
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Data and utilities
│       │   ├── gamePasses.ts  # Game pass data
│       │   ├── products.ts    # Product data
│       │   └── musicTracks.ts # Music tracks configuration
│       └── pages/        # Page components
├── server/               # Backend code
├── shared/               # Shared types
├── README.md             # This file
├── CONTRIBUTING.md       # Contribution guidelines
└── .gitignore            # Git ignore file
```

## Customization

### Adding a New Category

1. To add a new category, modify the GamePass interface in `client/src/lib/gamePasses.ts`:

```typescript
category: 'Dusk' | 'Donation' | 'Other' | 'YourNewCategory';
```

2. Then add game passes with the new category.

### Adding New Music Tracks

1. Place your music files in the `client/public/music/` directory
2. Edit `client/src/lib/musicTracks.ts` to add your tracks:

```typescript
export const MUSIC_TRACKS: Track[] = [
  // Existing tracks...
  
  // Add your new track here
  {
    id: "your-track-id",          // Unique identifier
    name: "Your Track Name",       // Display name
    src: "/music/your-track.mp3", // Path to file in public/music
    artist: "Artist Name",        // Artist name
    info: "Optional description"  // Optional description
  }
];
```

3. Restart the application to see your new tracks in the music player

### Changing Colors

The primary color scheme can be modified in `tailwind.config.js` by changing the primary color.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Designed and developed for KarmaTsukino
- Built using modern web technologies
- Special thanks to all open-source contributors