export interface PokemonDimension {
  minimum: string;
  maximum: string;
}

export interface PokemonAttack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonEvolution {
  id: string;
  name: string;
  image: string;
}

export interface PokemonEvolutionRequirement {
  amount: number;
  name: string;
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  image: string;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  weight: PokemonDimension;
  height: PokemonDimension;
  attacks: {
    fast: PokemonAttack[];
    special: PokemonAttack[];
  };
  evolutions: PokemonEvolution[] | null;
  evolutionRequirements: PokemonEvolutionRequirement | null;
}

export interface GetPokemonData {
  pokemon: Pokemon | null;
}

export interface GetPokemonVars {
  name: string;
}
