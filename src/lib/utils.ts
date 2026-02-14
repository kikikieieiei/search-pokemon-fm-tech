import { TYPE_COLORS, DEFAULT_TYPE_COLOR } from "@/constants";

export function formatPokemonName(name: string): string {
  const trimmed = name.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

export function getTypeColor(type: string): { bg: string; text: string } {
  return TYPE_COLORS[type] ?? DEFAULT_TYPE_COLOR;
}
