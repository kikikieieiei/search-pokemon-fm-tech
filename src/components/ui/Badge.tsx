import { getTypeColor } from "@/lib/utils";

export default function Badge({ label }: { label: string }) {
  const { bg, text } = getTypeColor(label);
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${bg} ${text}`}
    >
      {label}
    </span>
  );
}
