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

- Search Pokemon by name
- View detailed stats: types, height, weight, resistant, weaknesses
- View fast and special attacks
- Navigate through evolutions
- Skeleton loading state
- Error state with retry
- Responsive design (mobile + desktop)
