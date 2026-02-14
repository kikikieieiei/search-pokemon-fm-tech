"use client";

import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex w-full max-w-xl flex-col items-center gap-6 px-4">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Pokémon Search
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Search for a Pokémon by name
        </p>
        <SearchInput />
      </main>
    </div>
  );
}
