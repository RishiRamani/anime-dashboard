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

## Screenshots

### Laptop

<img width="1600" height="774" alt="Anime Dashboard Laptop View" src="https://github.com/user-attachments/assets/25a1031d-838c-45d4-b9b8-4d4a2b89edfc" />

### iPad

<img width="949" height="772" alt="Anime Dashboard iPad View" src="https://github.com/user-attachments/assets/96d893cb-7b7d-4ca5-9f2f-c4cab9c0b698" />

## Future Improvements

* TanStack Query integration
* Skeleton loaders
* Infinite scrolling
* URL query synchronization
* Favorites/watchlist system
* Client-side caching strategies
