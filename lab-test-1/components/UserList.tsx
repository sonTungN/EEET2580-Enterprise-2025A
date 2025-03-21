import { User } from "@/types/Users";
import UserItem from "./UserItem";

export default function UserList({ list }: { list: User[] }) {
  return <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
    {
      list.map(user => <UserItem key={user.id} user={user} />)
    }
  </div>
}
