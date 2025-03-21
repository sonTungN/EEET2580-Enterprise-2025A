import { Card, CardContent } from "@/components/ui/card";
import { User } from "@/utils/types";

export default function UserItem({ user }: { user: User }) {
  return (
    <article key={user.id}>
      <Card>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="w-32 h-32 overflow-hidden rounded-full">
            <img
              src={user.imageUrl}
              alt={user.name}
              className="w-full h-full"
            />
          </div>
          <h4 className="text-lg font-bold mt-2">{user.name}</h4>
          <span>{user.email}</span>
          <span className="line-clamp-1">City: {user.city}</span>
          <span className="line-clamp-1">Country: {user.country}</span>
        </CardContent>
      </Card>
    </article>
  );
}
