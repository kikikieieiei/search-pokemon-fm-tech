"use client";

import { usePokemonSearch } from "@/lib/hooks/usePokemonSearch";

export default function SearchInput({ initialValue = "" }: { initialValue?: string }) {
  const { searchTerm, setSearchTerm, handleSearch } =
    usePokemonSearch(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <label htmlFor="pokemon-search" className="sr-only">
        Pokemon name
      </label>
      <input
        id="pokemon-search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Pokémon by name..."
        className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-800 placeholder-zinc-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:ring-blue-800"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Search
      </button>
    </form>
  );
}
