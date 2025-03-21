"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const navLink = [
  { title: "Home", href: "/", isActive: true },
  { title: "About us", href: "/", isActive: false },
  { title: "Contact", href: "/", isActive: false },
  { title: "People", href: "/", isActive: false },
  { title: "Login", href: "/", isActive: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 px-4 py-3">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">WonderCar</h1>

        <div>
          <div className="flex justify-end">
            <Button
              className="md:hidden w-10 h-10 cursor-pointer"
              asChild
              size={"icon"}
              variant={"ghost"}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu />
            </Button>
          </div>

          <ul
            className={`${
              isOpen ? "flex" : "md:flex hidden"
            } flex md:flex-row flex-col items-end`}
          >
            {navLink.map((link, index) => (
              <li
                key={index}
                className={`${
                  link.isActive ? "font-bold" : ""
                } inline-block list-none md:mr-4 mb-2`}
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
