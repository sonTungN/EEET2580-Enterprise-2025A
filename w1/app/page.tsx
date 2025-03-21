import SearchBar from "@/components/SearchBar";
import UserList from "@/components/UserList";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen py-10">
      <UserList /> 
    </main>
  );
}
