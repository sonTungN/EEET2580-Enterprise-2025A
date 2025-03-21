"use client";

import { User } from "@/types/Users";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import { useState } from "react";

export default function UserPage({ users }: { users: User[] }) {
  const [initialList, setInitialList] = useState(users);
  const [list, setList] = useState<User[]>(users);
  const [query, setQuery] = useState("");

  const handleOnChange = (value: string) => {
    setQuery(value);

    if (value.trim() == "") {
      setList(initialList);
    } else {
      const filteredList = initialList.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setList(filteredList);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl my-4">Staff List</h1>
      <SearchBar handleOnChange={handleOnChange} />
      <UserList list={list} />
    </div>
  );
}
