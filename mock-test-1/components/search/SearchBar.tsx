"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type SearchBarProps = {
  params: string;
  handleOnChange: (value: string) => void;
};

export default function SearchBar({ params, handleOnChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-1/2 flex flex-col ">
      <div className="flex justify-center gap-2">
        <Input
          placeholder="Search users..."
          value={params}
          onChange={(e) => {
            handleOnChange(e.target.value);
          }}
        />

        <Button>Search</Button>
      </div>

      <div>
        <span className="inline-block text-sm ms-2 mt-2">
          Current terms: {params}
        </span>
      </div>
    </div>
  );
}
