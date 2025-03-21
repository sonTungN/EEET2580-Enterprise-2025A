import { User } from "@/types/Users";

export const useUserData = async () => {
  const response = await fetch("https://randomuser.me/api?results=20");
  const raw = (await response.json()).results;

  const data: User[] = raw.map((user: any) => {
    return {
      id: user.login.uuid,
      name: user.name.first + user.name.last,
      email: user.email,
      country: user.location.country,
      city: user.location.city,
      imageUrl: user.picture.large,
    } as User;
  });

  return data;
};
