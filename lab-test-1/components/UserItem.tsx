import { User } from "@/types/Users";
import { Card, CardContent } from "./ui/card";
import { Link, LocateIcon, MapPin } from "lucide-react";

export default function UserItem({ user }: { user: User }) {
  return (
    <article className="relative group">
      <Card className="group-hover:bg-gray-200">
        <CardContent className="flex flex-col items-center gap-2">
          <div className="w-[100px] h-[100px]">
            <img
              className="rounded-full w-full h-full object-cover"
              src={user.imageUrl}
              alt={user.name}
            />
          </div>
          <h4>{user.name}</h4>
          <div className="flex gap-1 items-center line-clamp-1">
            <span className="font-bold">City: </span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${user.city}`}
              target="_blank"
              className="underline"
            >
              {user.city}
            </a>
            <MapPin className="w-4 h-4"/>
          </div>
          <div>
            <span className="font-bold">Country: </span>
            <span>{user.country}</span>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
