import React, { Suspense } from "react";
import UserList from "../user/_components/UserList";
import Loading from "../user/_components/Loading";

export default function AboutPage() {
  return <Suspense fallback={<Loading />}>
    <UserList />
  </Suspense>
}
