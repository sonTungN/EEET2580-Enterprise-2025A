import { Ticket } from "@/types/Ticket";
import TicketItem from "./TicketItem";

export default function TicketList({ list }: { list: Ticket[] }) {
  return (
    <>
      {list.map((ticket, index) => (
        <TicketItem key={index} ticket={ticket} />
      ))}
    </>
  );
}
