import React from "react";
import { Input } from "./ui/input";

type SearchBarProps = {
  searchTerm: string,
  handleOnChange: Function;
};

export default function SearchBar({ searchTerm, handleOnChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-[400px] mb-4">
      <Input
        placeholder="Search users"
        value={searchTerm}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}
