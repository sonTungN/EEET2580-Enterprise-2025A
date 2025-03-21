"use client";

import { User } from "@/utils/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useUserData = (
  callbackData: (users: User[]) => void,
  callbackError: (error: boolean) => void
) => {
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api?results=20");
      const raw = (await response.json()).results as any[];
      const users: User[] = raw.map((user) => {
        return {
          id: user.login.uuid,
          name: user.name.first + user.name.last,
          city: user.location.city,
          country: user.location.country,
          imageUrl: user.picture.thumbnail,
          email: user.email,
        } as User;
      });

      localStorage.setItem("userList", JSON.stringify(users));
      return users;
    };

    if (!localStorage.getItem("userList")) {
      fetchUser()
        .then((users) => callbackData(users))
        .catch((error) => callbackError(false));
    } else {
      const userList = JSON.parse(localStorage.getItem("userList") as string);
      callbackData(userList);
    }

    return () => {
      localStorage.removeItem("userList");
    };
  }, []);
};
