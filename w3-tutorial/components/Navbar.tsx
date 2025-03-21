"use client";

import { CarTaxiFront, ShoppingCart, Store } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useStore } from "@/hooks/useStore";

export default function Navbar() {
  const { items, total, clearCart } = useStore();

  // Format the total price to VND
  const formattedTotal = (total / 1000).toFixed(3) + " VND";

  return (
    <nav className="border-b-2 py-2 px-4 bg-blue-300">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Store className="mr-2" />
          <h1 className="text-xl font-bold">STORE</h1>

          <ul>
            <li className="inline list-none ml-4">Promotions</li>
          </ul>
        </div>

        <Sheet>
          <SheetTrigger>
            <div className="relative">
              <ShoppingCart />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Shopping Cart ({items.length} items)</SheetTitle>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2"
                >
                  <span>{item.name}</span>
                  <span>{(item.price / 1000).toFixed(3)} VND</span>
                </div>
              ))}
            </SheetHeader>
            <SheetFooter>
              <div className="w-full space-y-4">
                <div>
                  <span className="inline-block text-lg font-bold mb-1">
                    TOTAL
                  </span>
                  <Input value={formattedTotal} readOnly />
                </div>
                <Button
                  onClick={clearCart}
                  className="w-full"
                  variant="destructive"
                  disabled={items.length === 0}
                >
                  CLEAR CART
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
