"use client";

import { useEffect } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_POKEMON } from "@/lib/queries";
import { POKEMON_CACHE_KEY, POKEMON_CACHE_MAX } from "@/constants";
import type { Pokemon, GetPokemonData, GetPokemonVars } from "@/types/pokemon";

function readCache(): Record<string, Pokemon> {
  try {
    const raw = localStorage.getItem(POKEMON_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeCache(name: string, pokemon: Pokemon) {
  try {
    const cache = readCache();
    cache[name.toLowerCase()] = pokemon;

    const keys = Object.keys(cache);
    if (keys.length > POKEMON_CACHE_MAX) {
      delete cache[keys[0]];
    }

    localStorage.setItem(POKEMON_CACHE_KEY, JSON.stringify(cache));
  } catch {
    // localStorage full or unavailable — silently ignore
  }
}

function getCached(name: string): Pokemon | null {
  const cache = readCache();
  return cache[name.toLowerCase()] ?? null;
}

export function usePokemonQuery(name: string) {
  const { data, loading, error, refetch } = useQuery<GetPokemonData, GetPokemonVars>(
    GET_POKEMON,
    {
      variables: { name },
      skip: !name,
    }
  );

  const pokemon = data?.pokemon ?? null;

  useEffect(() => {
    if (pokemon) {
      writeCache(name, pokemon);
    }
  }, [name, pokemon]);

  const cachedPokemon = loading && !pokemon ? getCached(name) : null;

  return {
    pokemon: pokemon ?? cachedPokemon,
    loading: loading && !cachedPokemon,
    error,
    refetch,
  };
}
