/**
 * Track Interface - Define a music track for the player
 */
export interface Track {
  /** Unique identifier for the track */
  id: string;
  /** Display name of the track */
  name: string;
  /** Path to the audio file */
  src: string;
  /** Artist name */
  artist: string;
  /** Optional additional information */
  info?: string;
}

/**
 * Music Tracks Collection
 * 
 * To add a new track:
 * 1. Add a new track object to this array
 * 2. Place the corresponding audio file in /public/music/ directory
 */
export const MUSIC_TRACKS: Track[] = [
  {
    id: "toby-fox-shop",
    name: "Shop Theme",
    src: "/music/toby-fox-shop-theme.mp3", 
    artist: "Toby Fox",
    info: "From Undertale"
  },
  {
    id: "wii-shop",
    name: "Wii Shop Remix",
    src: "/music/wii-shop-remix.mp3",
    artist: "Nintendo (Remix)",
    info: "Wii Shop Channel theme"
  },
  // Add more tracks here following the same format
  // Example:
  // {
  //   id: "unique-id",
  //   name: "Track Name",
  //   src: "/music/your-music-file.mp3",
  //   artist: "Artist Name",
  //   info: "Optional description"
  // }
];