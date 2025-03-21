import SearchBar from "@/components/SearchBar";
import UserList from "@/components/UserList";
import UserPage from "@/components/UserPage";
import { useUserData } from "@/hook/useUserData";

export default async function HomePage() {
  const users = await useUserData();

  return (
    <UserPage users={users} />
  );
}
