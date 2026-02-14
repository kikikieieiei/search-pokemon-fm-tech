import Card from "@/components/ui/Card";
import PokemonHeader from "./PokemonHeader";
import PokemonStats from "./PokemonStats";
import PokemonAttacks from "./PokemonAttacks";
import PokemonEvolutions from "./PokemonEvolutions";
import type { Pokemon } from "@/types/pokemon";

export default function PokemonResult({ pokemon }: { pokemon: Pokemon }) {
  const hasEvolutions = pokemon.evolutions && pokemon.evolutions.length > 0;

  return (
    <Card className="flex flex-col gap-6">
      <section aria-label="Basic information">
        <PokemonHeader pokemon={pokemon} />
      </section>
      <section aria-label="Stats">
        <PokemonStats pokemon={pokemon} />
      </section>
      <section aria-label="Attacks">
        <PokemonAttacks
          fast={pokemon.attacks.fast}
          special={pokemon.attacks.special}
        />
      </section>
      <section aria-label="Evolutions">
        {hasEvolutions ? (
          <PokemonEvolutions evolutions={pokemon.evolutions!} />
        ) : (
          <div>
            <h3 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
              Evolutions
            </h3>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              No known evolutions
            </p>
          </div>
        )}
      </section>
    </Card>
  );
}
