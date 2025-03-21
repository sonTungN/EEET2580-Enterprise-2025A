"use client"

import { Input } from "./ui/input";

export default function SearchBar({
  query,
  handleQuery,
}: {
  query: string;
  handleQuery: (value: string) => void;
}) {
  return (
    <>
      <div className="bg-amber-400 py-3 mb-4 text-center">
        <h1 className="text-2xl font-semibold">Product List</h1>
      </div>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => handleQuery(e.target.value)}
        />
      </div>
    </>
  );
}
