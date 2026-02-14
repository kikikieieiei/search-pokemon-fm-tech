import { memo } from "react";
import Image from "next/image";
import type { Pokemon } from "@/types/pokemon";

export default memo(function PokemonHeader({
  pokemon,
}: {
  pokemon: Pick<Pokemon, "name" | "number" | "image" | "classification">;
}) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <Image
        src={pokemon.image}
        alt={`${pokemon.name} artwork`}
        width={192}
        height={192}
        priority
        className="h-32 w-32 rounded-lg sm:h-48 sm:w-48"
      />
      <div className="text-center sm:text-left">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          #{pokemon.number}
        </p>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          {pokemon.name}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          {pokemon.classification}
        </p>
      </div>
    </div>
  );
})
