"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLink = [
  { name: "Home", href: "/user" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function NavBarNoSheet() {
  const [isActive, setActive] = useState(false);

  return (
    <nav className="border-b">
      <div className="container mx-auto flex justify-between px-2 py-2">
        <div className="h-full flex">
          <h1 className="text-2xl font-bold">TEST</h1>
        </div>

        <div>
          <div className="flex justify-end">
            <Button
              className="md:hidden"
              variant={"outline"}
              size={"icon"}
              onClick={() => setActive(!isActive)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          <div
            className={`${
              isActive ? "flex" : "md:flex hidden"
            }  flex-col md:flex-row gap-4 mt-2`}
          >
            {navLink.map((link, index) => {
              return (
                <Link
                  className="text-right text-lg transition-colors hover:text-red-400 pe-2"
                  href={link.href}
                  key={index}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
