import Card from "@/components/ui/Card";

export default function NotFound({ name }: { name: string }) {
  return (
    <Card className="text-center" >
      <div role="alert" className="flex flex-col items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-12 w-12 text-zinc-300 dark:text-zinc-600"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          No Pokémon found for &quot;{name}&quot;
        </p>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          Try searching with a different name
        </p>
      </div>
    </Card>
  );
}
