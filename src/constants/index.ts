export const API_URL = "https://graphql-pokemon2.vercel.app";

export const buildPokemonPath = (name: string) =>
  `/pokemon/${name.toLowerCase()}`;

export const DEFAULT_TYPE_COLOR = { bg: "bg-gray-400", text: "text-white" };

export const POKEMON_CACHE_KEY = "pokemon-cache";
export const POKEMON_CACHE_MAX = 10;

export const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  Normal: { bg: "bg-gray-400", text: "text-white" },
  Fire: { bg: "bg-red-500", text: "text-white" },
  Water: { bg: "bg-blue-500", text: "text-white" },
  Electric: { bg: "bg-yellow-400", text: "text-zinc-900" },
  Grass: { bg: "bg-green-600", text: "text-white" },
  Ice: { bg: "bg-cyan-500", text: "text-white" },
  Fighting: { bg: "bg-orange-700", text: "text-white" },
  Poison: { bg: "bg-purple-500", text: "text-white" },
  Ground: { bg: "bg-amber-600", text: "text-white" },
  Flying: { bg: "bg-indigo-500", text: "text-white" },
  Psychic: { bg: "bg-pink-500", text: "text-white" },
  Bug: { bg: "bg-lime-600", text: "text-white" },
  Rock: { bg: "bg-yellow-700", text: "text-white" },
  Ghost: { bg: "bg-purple-700", text: "text-white" },
  Dragon: { bg: "bg-indigo-600", text: "text-white" },
  Dark: { bg: "bg-gray-700", text: "text-white" },
  Steel: { bg: "bg-gray-400", text: "text-white" },
  Fairy: { bg: "bg-pink-400", text: "text-zinc-900" },
};
