"use client";

import { useQuery } from "@apollo/client/react";
import { GET_POKEMON } from "@/lib/queries";
import type { GetPokemonData, GetPokemonVars } from "@/types/pokemon";

export function usePokemonQuery(name: string) {
  const { data, loading, error, refetch } = useQuery<GetPokemonData, GetPokemonVars>(
    GET_POKEMON,
    {
      variables: { name },
      skip: !name,
    }
  );

  return {
    pokemon: data?.pokemon ?? null,
    loading,
    error,
    refetch,
  };
}
