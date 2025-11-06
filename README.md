# Spotify 2.0 (UI)

A lightweight, local React UI inspired by Spotify. This project demonstrates a music-player-style interface with playlist detail pages, a responsive bottom player, and an "Activity / Friends" tab with demo data. It's intended as a front-end demo and learning project — the app integrates with the Spotify Web API and Firebase for some features.

## Key features

- Modern React single-page UI (create-react-app structure)
- Bottom music player with play/pause, progress and track info
- Playlist detail page (fetches playlist details from Spotify Web API)
- Friends Activity tab with demo friends (UI-only by default)
- Responsive improvements to reduce overflow when zooming the browser on desktop
- Small Firebase helpers included for saving liked songs / playlists

## Demo friends

The `Friends Activity` tab contains a set of demo friends added for UI/demo purposes:
- Alex Turner — Listening to: "Do I Wanna Know?" by Arctic Monkeys
- Sana Park — Added 5 songs to "Chill Vibes"
- Michael B — Listening to: "Blinding Lights" by The Weeknd
- Priya K — Liked: "Sunflower" by Post Malone
- Daniel — Started listening to "Discover Weekly"

These are rendered from a local array in `src/layout/asideNav/tab/friendTab.js`. They are not persisted to your backend unless you wire them to Firestore.

## Responsive & zoom fixes (desktop)

Recent edits made UI elements more resilient to browser zoom:
- `player` styles updated to use flexible units, `clamp()`, and `min-width`/`min-height` constraints to prevent horizontal overflow.
- `playlistDetail` layout updated to use `flex` with `min-width: 0`, responsive breakpoints and `aspect-ratio` for cover images.
- Added `box-sizing: border-box` and smaller breakpoints so the layout stacks and scales instead of overflowing when zooming.

If you still see overflow at extreme zoom levels, try inspecting the element that causes the horizontal scroll (browser devtools -> Elements -> look for a very wide child) and adjust the `min-width`/`max-width` values for that component.

## Prerequisites

- Node.js (14+ recommended)
- npm (or yarn)
- A Spotify Developer application (for consuming the Spotify Web API) if you want to fetch real playlists
- Firebase configuration if you want to use the Firestore helpers (optional)

## Setup & run (PowerShell)

Open a PowerShell terminal in the project root and run:

```powershell
# install deps
npm install

# start dev server
npm start
```

The app runs at http://localhost:3000 by default.

## Environment / Configuration

- Spotify token: This project expects an OAuth access token for Spotify to be available in `localStorage` under the key `token`. The playlist detail page and other Spotify API calls use that token.
	- If you hit 401 errors, your token is likely expired; re-authenticate and store a fresh token in localStorage, or implement a refresh flow.

- Firebase: The project includes a Firebase config file at `src/firbeaseConfig/firebaseConfig.js`. If you want Firestore features to work, update that file with your Firebase project credentials.

## Common issues & troubleshooting

- `play() failed because the user didn't interact with the document first` (NotAllowedError):
	- Browsers disallow autoplay of audio/video until the user interacts (click/tap). Make sure the user presses the play button (or perform a user-triggered action) to start playback.
	- The code now catches and logs `play()` promise rejections and sets the player state accordingly.

- `AxiosError: Network Error` / 404 when fetching playlists:
	- Ensure `localStorage.token` contains a valid Spotify access token with the correct scopes.
	- Verify the playlist ID in the URL exists and is accessible (public or owned by the authenticated user).
	- 404 means the playlist isn't found; 403 means you don't have permission.

- Layout overflow on zoom:
	- New CSS changes reduce overflow, but if a custom component introduces wide fixed widths, replace them with responsive units and ensure `min-width: 0` on flex children.

## Files/locations of interest

- Player UI: `src/layout/player/player.js`, `src/layout/player/player.scss`
- Playlist detail: `src/page/playlistDetail/playlistDetail.js`, `src/page/playlistDetail/playlistdetail.css`
- Friends Activity tab: `src/layout/asideNav/tab/friendTab.js`
- Providers (context): `src/provider/*` (AccessTokenProvider, PlayerDataProvider, etc.)
- Firebase config: `src/firbeaseConfig/firebaseConfig.js`

## Contributing

Contributions are welcome. Suggested small improvements:
- Convert inline styles in `friendTab.js` to CSS classes in `asideNav.css`
- Add real avatars and persist demo friends to Firestore behind a feature flag
- Implement Spotify refresh token flow
- Improve accessibility (aria labels for audio controls)

When opening a PR, please:
- Keep changes focused and small
- Run the app locally and verify no console errors
- Include a short description of the change

## License

This repository doesn't include an explicit license file. Add one if you intend to publish or share the project widely (e.g., MIT).

---

If you'd like, I can:
- Move the inline demo friends styles into `src/layout/asideNav/asideNav.css` and clean up the component,
- Add an environment example file (e.g., `.env.example`) showing required variables,
- Or wire the demo friends to Firestore behind a `DEMO_FRIENDS` toggle.

Which of these would you like next?
