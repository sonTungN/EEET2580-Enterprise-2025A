import React, { Suspense } from "react";
import UserList from "./_components/UserList";
import Loading from "./_components/Loading";

export default function UserPage() {
  return (
    <Suspense fallback={<Loading />}>
      <UserList />
    </Suspense>
  );
}
