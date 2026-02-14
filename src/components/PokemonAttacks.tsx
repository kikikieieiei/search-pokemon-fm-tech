import DataTable from "@/components/ui/DataTable";
import type { PokemonAttack } from "@/types/pokemon";

const ATTACK_COLUMNS = [
  { header: "Name", accessor: "name" as const },
  { header: "Type", accessor: "type" as const },
  { header: "Damage", accessor: "damage" as const },
];

export default function PokemonAttacks({
  fast,
  special,
}: {
  fast: PokemonAttack[];
  special: PokemonAttack[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <DataTable title="Fast Attacks" columns={ATTACK_COLUMNS} data={fast} />
      <DataTable
        title="Special Attacks"
        columns={ATTACK_COLUMNS}
        data={special}
      />
    </div>
  );
}
