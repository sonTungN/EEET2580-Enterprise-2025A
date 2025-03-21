"use client";

import { users } from "@/data/users";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import SearchBar from "./SearchBar";

type User = {
  id: number;
  name: string;
  image: string;
};

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState("");

  const updatedList: User[] = users.filter((user) => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleOnChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <SearchBar handleOnChange={handleOnChange} searchTerm={searchTerm} />

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8">
        {updatedList.map((user) => {
          return (
            <Card key={user.id} className="p-4">
              <CardContent className="relative">
                <Image
                  src={user.image}
                  alt={user.name}
                  priority
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </CardContent>

              <CardContent className="text-center">
                <h4 className="text-lg font-bold">{user.name}</h4>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
