"use client";

import { useUserData } from "@/hook/useUserData";
import { User } from "@/utils/types";
import { useState } from "react";
import UserItem from "./UserItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UserList() {
  const [list, setList] = useState<User[]>();
  const [isError, setIsError] = useState<boolean>(false);
  const [params, setParams] = useState("");

  useUserData(
    (users) => setList(users),
    (error) => setIsError(error)
  );

  const handleOnChange = (value: string) => {
    setParams(value);
    const UserStringObj = localStorage.getItem("userList") as string;

    if (UserStringObj) {
      const users = JSON.parse(UserStringObj) as User[];
      console.log(users);
      
      if (value.trim() === "") {
        setList(users);
      } else {
        setList(
          users.filter((user) =>
            user.name.toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    } else {
      setList([]);
    }
  };

  return (
    <>
      {/* Search bar */}
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
      
      {/* List with Hook */}
      <div>
        {isError ? (
          <div>
            <h1>Something wrong while fetching user data...</h1>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-4">
            {list?.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
