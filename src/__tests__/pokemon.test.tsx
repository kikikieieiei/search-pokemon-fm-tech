import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonResult from "@/components/PokemonResult";
import type { Pokemon } from "@/types/pokemon";

// ─── Mock next/image & next/link ────────────────────────────────────────────

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, ...props }: Record<string, unknown>) => (
    <img alt={alt as string} {...props} />
  ),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

// ─── Mock Factory ───────────────────────────────────────────────────────────

function createMockPokemon(overrides: Partial<Pokemon> = {}): Pokemon {
  return {
    id: "mock-id",
    number: "000",
    name: "MockPokemon",
    image: "https://img.pokemondb.net/artwork/mock.jpg",
    classification: "Mock Pokémon",
    types: [],
    resistant: [],
    weaknesses: [],
    fleeRate: 0.1,
    maxCP: 1000,
    maxHP: 1000,
    weight: { minimum: "1kg", maximum: "2kg" },
    height: { minimum: "0.1m", maximum: "0.2m" },
    attacks: { fast: [], special: [] },
    evolutions: null,
    evolutionRequirements: null,
    ...overrides,
  };
}

const bulbasaur = createMockPokemon({
  id: "UG9rZW1vbjowMDE=",
  number: "001",
  name: "Bulbasaur",
  image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  classification: "Seed Pokémon",
  types: ["Grass", "Poison"],
  resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  fleeRate: 0.1,
  maxCP: 1071,
  maxHP: 1229,
  weight: { minimum: "6.04kg", maximum: "7.76kg" },
  height: { minimum: "0.61m", maximum: "0.79m" },
  attacks: {
    fast: [
      { name: "Tackle", type: "Normal", damage: 12 },
      { name: "Vine Whip", type: "Grass", damage: 7 },
    ],
    special: [
      { name: "Power Whip", type: "Grass", damage: 70 },
      { name: "Sludge Bomb", type: "Poison", damage: 80 },
      { name: "Seed Bomb", type: "Grass", damage: 40 },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDI=",
      name: "Ivysaur",
      image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
    },
  ],
  evolutionRequirements: { amount: 25, name: "Bulbasaur candies" },
});

const charmander = createMockPokemon({
  id: "UG9rZW1vbjowMDQ=",
  number: "004",
  name: "Charmander",
  image: "https://img.pokemondb.net/artwork/charmander.jpg",
  classification: "Lizard Pokémon",
  types: ["Fire"],
  resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
  weaknesses: ["Water", "Ground", "Rock"],
  fleeRate: 0.1,
  maxCP: 955,
  maxHP: 1108,
  weight: { minimum: "7.44kg", maximum: "9.56kg" },
  height: { minimum: "0.53m", maximum: "0.68m" },
  attacks: {
    fast: [
      { name: "Ember", type: "Fire", damage: 10 },
      { name: "Scratch", type: "Normal", damage: 6 },
    ],
    special: [
      { name: "Flame Charge", type: "Fire", damage: 25 },
      { name: "Flame Burst", type: "Fire", damage: 30 },
      { name: "Flamethrower", type: "Fire", damage: 55 },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDU=",
      name: "Charmeleon",
      image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
    },
  ],
  evolutionRequirements: { amount: 25, name: "Charmander candies" },
});

const squirtle = createMockPokemon({
  id: "UG9rZW1vbjowMDc=",
  number: "007",
  name: "Squirtle",
  image: "https://img.pokemondb.net/artwork/squirtle.jpg",
  classification: "Tiny Turtle Pokémon",
  types: ["Water"],
  resistant: ["Fire", "Water", "Ice", "Steel"],
  weaknesses: ["Electric", "Grass"],
  fleeRate: 0.1,
  maxCP: 946,
  maxHP: 1100,
  weight: { minimum: "7.88kg", maximum: "10.13kg" },
  height: { minimum: "0.44m", maximum: "0.56m" },
  attacks: {
    fast: [
      { name: "Bubble", type: "Water", damage: 25 },
      { name: "Tackle", type: "Normal", damage: 12 },
    ],
    special: [
      { name: "Aqua Jet", type: "Water", damage: 25 },
      { name: "Aqua Tail", type: "Water", damage: 45 },
      { name: "Water Pulse", type: "Water", damage: 35 },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDg=",
      name: "Wartortle",
      image: "https://img.pokemondb.net/artwork/wartortle.jpg",
    },
  ],
  evolutionRequirements: { amount: 25, name: "Squirtle candies" },
});

// ─── Tests ──────────────────────────────────────────────────────────────────

describe("Pokemon type assertions", () => {
  it("Bulbasaur has type Grass", () => {
    render(<PokemonResult pokemon={bulbasaur} />);
    expect(screen.getAllByText("Grass").length).toBeGreaterThanOrEqual(1);
    expect(bulbasaur.types).toContain("Grass");
  });

  it("Charmander has type Fire", () => {
    render(<PokemonResult pokemon={charmander} />);
    expect(screen.getAllByText("Fire").length).toBeGreaterThanOrEqual(1);
    expect(charmander.types).toContain("Fire");
  });

  it("Squirtle has type Water", () => {
    render(<PokemonResult pokemon={squirtle} />);
    expect(screen.getAllByText("Water").length).toBeGreaterThanOrEqual(1);
    expect(squirtle.types).toContain("Water");
  });
});

describe("Pokemon renders correctly", () => {
  it("Bulbasaur displays name and classification", () => {
    render(<PokemonResult pokemon={bulbasaur} />);
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("#001")).toBeInTheDocument();
    expect(screen.getByText("Seed Pokémon")).toBeInTheDocument();
  });

  it("Charmander displays attacks", () => {
    render(<PokemonResult pokemon={charmander} />);
    expect(screen.getByText("Ember")).toBeInTheDocument();
    expect(screen.getByText("Flamethrower")).toBeInTheDocument();
  });

  it("Squirtle displays evolutions as links", () => {
    render(<PokemonResult pokemon={squirtle} />);
    const link = screen.getByRole("link", { name: /Wartortle/ });
    expect(link).toHaveAttribute("href", "/pokemon/wartortle");
  });
});
