"use client";

import { Suspense, use, useCallback } from "react";
import SearchInput from "@/components/SearchInput";
import PokemonResult from "@/components/PokemonResult";
import NotFound from "@/components/NotFound";
import Card from "@/components/ui/Card";
import { usePokemonQuery } from "@/lib/hooks/usePokemonQuery";
import { formatPokemonName } from "@/lib/utils";

function LoadingSkeleton() {
  return (
    <Card className="flex flex-col gap-6">
      <div className="flex animate-pulse flex-col items-center gap-4 sm:flex-row">
        <div className="h-32 w-32 rounded-lg bg-zinc-200 sm:h-48 sm:w-48 dark:bg-zinc-700" />
        <div className="flex flex-col gap-2">
          <div className="h-4 w-16 rounded bg-zinc-200 dark:bg-zinc-700" />
          <div className="h-8 w-40 rounded bg-zinc-200 dark:bg-zinc-700" />
          <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-700" />
        </div>
      </div>
      <div className="flex animate-pulse flex-wrap gap-2">
        <div className="h-7 w-16 rounded-full bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-7 w-20 rounded-full bg-zinc-200 dark:bg-zinc-700" />
      </div>
      <div className="animate-pulse space-y-2">
        <div className="h-5 w-32 rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-700" />
      </div>
    </Card>
  );
}

function PokemonContent({ pokemonName }: { pokemonName: string }) {
  const { pokemon, loading, error, refetch } = usePokemonQuery(pokemonName);

  const handleRetry = useCallback(() => {
    refetch();
  }, [refetch]);

  if (loading) return <LoadingSkeleton />;

  if (error) {
    return (
      <Card>
        <div role="alert" className="flex flex-col items-center gap-3 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 text-red-400"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          <p className="text-zinc-600 dark:text-zinc-400">
            Something went wrong loading this Pokémon.
          </p>
          <button
            onClick={handleRetry}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Try again
          </button>
        </div>
      </Card>
    );
  }

  if (pokemon) return <PokemonResult pokemon={pokemon} />;

  return <NotFound name={pokemonName} />;
}

export default function PokemonPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = use(params);
  const pokemonName = formatPokemonName(name);

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-8 font-sans dark:bg-zinc-950">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <h1 className="text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Pokémon Search
        </h1>
        <SearchInput initialValue={pokemonName} />

        <Suspense fallback={<LoadingSkeleton />}>
          <PokemonContent pokemonName={pokemonName} />
        </Suspense>
      </div>
    </main>
  );
}
