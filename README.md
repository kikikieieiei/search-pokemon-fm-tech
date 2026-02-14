# Pokemon Search

A Next.js app that searches Pokemon using the [Pokemon GraphQL API](https://graphql-pokemon2.vercel.app).

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Apollo Client** for GraphQL data fetching
- **Tailwind CSS v4** for styling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Jest tests |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with Apollo Provider
│   ├── page.tsx                # Home — search input
│   └── pokemon/[name]/
│       └── page.tsx            # Pokemon detail page
├── components/
│   ├── ui/                     # Shared UI primitives (Card, Badge, DataTable)
│   ├── SearchInput.tsx         # Search form with navigation
│   ├── PokemonResult.tsx       # Composes Header, Stats, Attacks, Evolutions
│   └── NotFound.tsx            # Not found state
├── lib/
│   ├── apollo-client.ts        # Apollo Client singleton
│   ├── apollo-provider.tsx     # ApolloProvider wrapper
│   ├── queries.ts              # GraphQL queries
│   ├── hooks/                  # Custom hooks (usePokemonQuery, usePokemonSearch)
│   └── utils.ts                # Shared helpers
├── constants/
│   └── index.ts                # API URL, route helpers, type colors
└── types/
    └── pokemon.ts              # TypeScript interfaces
```

## Features

- Search Pokemon by name via GraphQL (Apollo Client)
- View detailed stats: types, height, weight, resistant, weaknesses, max CP/HP, flee rate, evolution requirements
- View fast and special attacks in sortable tables
- Navigate through evolutions (click to view)
- localStorage caching for recently viewed Pokemon (up to 10)
- Skeleton loading state with animated placeholders
- Error state with retry button
- Responsive design (mobile + desktop)

## Performance

- **React.memo** on leaf components to prevent unnecessary re-renders
- **useMemo / useCallback** for stable references
- **Suspense** boundary for async content loading
- **Apollo InMemoryCache** for automatic GraphQL query caching
- **localStorage** fallback for offline-friendly UX

## Testing

Jest + React Testing Library with mocks for Bulbasaur, Charmander, and Squirtle:

```bash
npm run test
```

6 tests covering type assertions and component rendering.
