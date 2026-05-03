# Disney+ Hotstar Clone

A frontend clone of the Disney+ Hotstar video streaming platform built with React, Redux Toolkit, and Firebase. Replicates the core UI including authentication, a movie browsing home screen, and individual movie detail pages.

---

## Features

- **Google Sign-In / Sign-Out** via Firebase Authentication
- **Session persistence** — stays logged in on page refresh via `onAuthStateChanged`
- **Real-time movie data** fetched from Firestore using `onSnapshot`
- **Banner carousel** with auto-play
- **Brand category tiles** — Disney, Marvel, Pixar, Star Wars, National Geographic
- **Movie grid** — dynamically rendered from Firestore
- **Movie detail page** — background image, title, subtitle, description, and action buttons

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 17 | UI framework |
| Redux Toolkit | Global state management |
| React Router v5 | Client-side routing |
| Firebase (Firestore) | Movie data database |
| Firebase Auth | Google OAuth authentication |
| Firebase Storage | Media file storage |
| styled-components | Component-scoped CSS styling |
| react-slick | Banner image carousel |

---

## Project Structure

```
src/
├── app/
│   └── store.js                  Redux store (user + movie reducers)
├── features/
│   ├── user/
│   │   └── userSlice.js          Auth state: name, email, photo
│   └── movie/
│       └── movieSlice.js         Movies array from Firestore
├── components/
│   ├── Header.js                 Navigation bar + Google sign-in/sign-out
│   ├── Login.js                  Unauthenticated landing page
│   ├── Home.js                   Main home screen + Firestore data fetching
│   ├── ImgSlider.js              Auto-playing banner carousel
│   ├── Viewers.js                Brand category tiles (5-column grid)
│   ├── Movies.js                 Movie card grid (4-column)
│   └── Detail.js                 Individual movie detail page
├── firebase.js                   Firebase initialization and exports
└── App.js                        Route definitions
```

---

## Getting Started

### Prerequisites

- Node.js (v14+)
- A Firebase project with Firestore, Authentication, and Storage enabled

### Installation

```bash
git clone https://github.com/ayushgupta75/Online-Video-Streaming-Platform.git
cd Online-Video-Streaming-Platform
npm install
```

### Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Enable **Google** as a sign-in method under Authentication.
3. Create a **Firestore** database and add a `movies` collection. Each document should have these fields:

   | Field | Type | Description |
   |---|---|---|
   | `cardImg` | string | URL for the movie grid thumbnail |
   | `backgroundImg` | string | URL for the detail page background |
   | `titleImg` | string | URL for the movie title logo |
   | `subTitle` | string | Genre / rating tagline |
   | `description` | string | Movie description |

4. Replace the Firebase config in `src/firebase.js` with your own project credentials (or use environment variables — see below).

### Environment Variables (Recommended)

Instead of hardcoding Firebase credentials, create a `.env` file in the project root:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Then update `src/firebase.js` to read from `process.env.REACT_APP_*`.

### Running the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Main screen with carousel, brand tiles, movie grid |
| `/login` | `Login` | Landing page for unauthenticated users |
| `/detail/:id` | `Detail` | Movie detail page (`:id` is the Firestore document ID) |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Run the app in development mode |
| `npm test` | Launch the test runner |
| `npm run build` | Build the app for production |
| `npm run eject` | Eject from Create React App (irreversible) |

---

## Known Limitations

- **Search, Watchlist, Originals, Movie, Series** nav links are placeholder UI — not yet functional.
- **Play and Trailer** buttons on the detail page are styled but do not trigger video playback.
- The user avatar in the header is a hardcoded local image rather than the authenticated user's Google profile photo.
