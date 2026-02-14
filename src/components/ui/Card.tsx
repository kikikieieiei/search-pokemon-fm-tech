export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-4 shadow-md sm:p-6 dark:bg-zinc-900 ${className}`}
    >
      {children}
    </div>
  );
}
