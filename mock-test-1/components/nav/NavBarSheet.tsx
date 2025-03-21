import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const navLink = [
  { name: "Home", href: "/user" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function NavBarSheet() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between px-2 py-2">
        <h1 className="text-2xl font-bold bg-">TEST</h1>

        <div className="hidden md:flex gap-8">
          {navLink.map((link, index) => {
            return (
              <Link
                className="text-lg transition-colors hover:text-red-400"
                href={link.href}
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant={"outline"} size={"icon"}>
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[240px] max-w-[300px]">
            <SheetHeader>
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-4 p-4">
              {navLink.map((link, index) => {
                return (
                  <Link
                    className="text-lg transition-colors hover:text-red-400"
                    href={link.href}
                    key={index}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
