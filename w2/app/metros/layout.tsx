import React, { ReactNode } from "react";

export default function MetroLayout({ children }: { children: ReactNode }) {
  return <main className="py-20 px-10">
    {children}
  </main>;
}
