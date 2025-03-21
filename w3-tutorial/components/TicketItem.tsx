"use client"

import { Ticket } from "@/types/Ticket";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useStore } from "@/hooks/useStore";

export default function TicketItem({ ticket }: { ticket: Ticket }) {
  const addToCart = useStore((state) => state.addToCart);
  const formattedPrice = (ticket.price / 1000).toFixed(3) + " VND";

  const handleAddToCart = () => {
    addToCart({ quantity: 0, ...ticket });
  };

  return (
    <article className="my-2">
      <Card>
        <CardContent className="flex justify-between items-center">
          <h4 className="w-[120px] text-xl">{ticket.name}</h4>
          <p className="w-[200px] text-sm">{ticket.description}</p>
          <p>{formattedPrice}</p>
          <Button className="bg-blue-700 w-[200px]" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </article>
  );
}
