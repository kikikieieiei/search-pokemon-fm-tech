import { memo } from "react";
import Badge from "@/components/ui/Badge";
import type { Pokemon } from "@/types/pokemon";

export default memo(function PokemonStats({
  pokemon,
}: {
  pokemon: Pick<
    Pokemon,
    | "types"
    | "height"
    | "weight"
    | "resistant"
    | "weaknesses"
    | "fleeRate"
    | "maxCP"
    | "maxHP"
    | "evolutionRequirements"
  >;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Types
        </h3>
        <div className="flex flex-wrap gap-2">
          {pokemon.types.map((type) => (
            <Badge key={type} label={type} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Height
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          {pokemon.height.minimum} – {pokemon.height.maximum}
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Weight
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          {pokemon.weight.minimum} – {pokemon.weight.maximum}
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Max CP / HP
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          {pokemon.maxCP} / {pokemon.maxHP}
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Flee Rate
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          {(pokemon.fleeRate * 100).toFixed(0)}%
        </p>
      </div>

      {pokemon.evolutionRequirements && (
        <div>
          <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            Evolution Requirement
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            {pokemon.evolutionRequirements.amount} {pokemon.evolutionRequirements.name}
          </p>
        </div>
      )}

      <div>
        <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Resistant
        </h3>
        <div className="flex flex-wrap gap-2">
          {pokemon.resistant.map((type) => (
            <Badge key={type} label={type} />
          ))}
        </div>
      </div>

      <div className="sm:col-span-2">
        <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Weaknesses
        </h3>
        <div className="flex flex-wrap gap-2">
          {pokemon.weaknesses.map((type) => (
            <Badge key={type} label={type} />
          ))}
        </div>
      </div>
    </div>
  );
})
