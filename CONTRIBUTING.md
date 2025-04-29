# Contributing to KarmaTsukino Game Pass Shop

Thank you for considering contributing to this project! Here's how you can help:

## Ways to Contribute

1. **Add new features**: Implement new components or functionality
2. **Fix bugs**: Help identify and fix issues
3. **Improve documentation**: Make the code or README clearer
4. **Suggest enhancements**: Share your ideas for making the shop better

## Development Workflow

1. Fork the repository
2. Create a new branch for your feature or fix
3. Make your changes
4. Test your changes thoroughly
5. Submit a pull request

## Adding New Game Passes

The game pass data is stored in `client/src/lib/gamePasses.ts`. To add a new game pass:

1. Add a new entry to the `gamePasses` array
2. Make sure to include all required fields (see the `GamePass` interface)
3. Use a unique ID for the new game pass
4. Test that it appears correctly in the shop

### Example:

```typescript
{
  id: 10, // Use a unique ID
  name: "Your New Game Pass",
  price: 100,
  priceDisplay: "100 RS",
  image: "URL_TO_YOUR_IMAGE",
  description: "Description of your game pass",
  category: "Donation", // or another category
  platform: "Roblox", // or "Scratch" or "Other"
  externalId: "YOUR_ROBLOX_GAMEPASS_ID", // Optional
  externalLink: "https://www.roblox.com/game-pass/YOUR_ID",
  badge: "NEW", // Optional: "NEW", "SALE", "POPULAR", "COMING_SOON", or null
  status: "active" // "active", "maintenance", "unavailable", or "coming_soon"
}
```

## Adding New Categories

To add a new category:

1. Update the `GamePass` interface in `client/src/lib/gamePasses.ts`:
   ```typescript
   category: 'Dusk' | 'Donation' | 'Other' | 'YourNewCategory';
   ```
2. Add game passes with the new category

## Code Style

- Use meaningful variable and function names
- Add comments to explain complex logic
- Follow the existing project structure
- Use TypeScript types for better code quality

## Questions?

If you have any questions about contributing, feel free to open an issue in the repository.

Thank you for helping improve this project!