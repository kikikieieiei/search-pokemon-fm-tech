import { memo, useMemo } from "react";
import DataTable from "@/components/ui/DataTable";
import type { PokemonAttack } from "@/types/pokemon";

export default memo(function PokemonAttacks({
  fast,
  special,
}: {
  fast: PokemonAttack[];
  special: PokemonAttack[];
}) {
  const columns = useMemo(
    () => [
      { header: "Name", accessor: "name" as const },
      { header: "Type", accessor: "type" as const },
      { header: "Damage", accessor: "damage" as const },
    ],
    []
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <DataTable title="Fast Attacks" columns={columns} data={fast} />
      <DataTable
        title="Special Attacks"
        columns={columns}
        data={special}
      />
    </div>
  );
})
