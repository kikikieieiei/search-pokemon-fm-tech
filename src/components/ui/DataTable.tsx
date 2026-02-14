interface Column<T> {
  header: string;
  accessor: keyof T;
}

interface DataTableProps<T> {
  title: string;
  columns: Column<T>[];
  data: T[];
}

export default function DataTable<T>({
  title,
  columns,
  data,
}: DataTableProps<T>) {
  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-700">
              {columns.map((col) => (
                <th
                  key={String(col.accessor)}
                  scope="col"
                  className="px-3 py-2 font-medium text-zinc-500 dark:text-zinc-400"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-3 py-4 text-center text-zinc-400 dark:text-zinc-500"
                >
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-zinc-100 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800/50"
                >
                  {columns.map((col) => (
                    <td
                      key={String(col.accessor)}
                      className="px-3 py-2 text-zinc-700 dark:text-zinc-300"
                    >
                      {String(row[col.accessor])}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
