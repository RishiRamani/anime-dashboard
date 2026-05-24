# Anime Dashboard

Responsive anime discovery dashboard built with React, TypeScript, Tailwind CSS, and the Jikan API.

The project focuses on API-driven UI architecture, async request handling, query-based data fetching, and responsive frontend design.

---

## Features

* Anime search with debounced API requests
* Pagination system with API metadata handling
* Sorting and ordering controls
* Responsive dashboard layout
* Anime detail modal overlay
* Loading and error state handling
* Type-safe API integration
* Service-layer API abstraction
* Environment-based API configuration

---

## Tech Stack

* React
* TypeScript
* Tailwind CSS
* Vite
* Jikan API

---

## Technical Highlights

* Async data fetching with request lifecycle management
* Query parameter composition for search, pagination, and sorting
* Debounced search flow using effect cleanup
* Conditional rendering for loading, error, and empty states
* Responsive grid and modal layouts
* State-driven UI architecture
* Typed API response modeling with TypeScript
* Component-driven frontend structure

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=https://api.jikan.moe/v4
```

---

## Setup

```bash
npm install
npm run dev
```

---

## Future Improvements

* TanStack Query integration
* Skeleton loaders
* Infinite scrolling
* URL query synchronization
* Favorites/watchlist system
* Client-side caching strategies
