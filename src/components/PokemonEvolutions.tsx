import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { buildPokemonPath } from "@/constants";
import type { PokemonEvolution } from "@/types/pokemon";

export default memo(function PokemonEvolutions({
  evolutions,
}: {
  evolutions: PokemonEvolution[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
        Evolutions
      </h3>
      <div className="flex flex-wrap gap-4">
        {evolutions.map((evolution) => (
          <Link
            key={evolution.id}
            href={buildPokemonPath(evolution.name)}
            className="flex flex-col items-center rounded-lg p-3 transition-all duration-200 hover:scale-105 hover:bg-zinc-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:hover:bg-zinc-800"
          >
            <Image
              src={evolution.image}
              alt={`${evolution.name} artwork`}
              width={80}
              height={80}
              className="rounded-lg"
            />
            <span className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
              {evolution.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
})
