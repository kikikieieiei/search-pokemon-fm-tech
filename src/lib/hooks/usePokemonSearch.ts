"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { buildPokemonPath } from "@/constants";

export function usePokemonSearch(initialValue = "") {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const router = useRouter();

  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      router.push(buildPokemonPath(trimmed));
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
  };
}
