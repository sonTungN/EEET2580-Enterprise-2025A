import { useTicketData } from "@/hooks/useTicketData";
import TicketList from "./TicketList";

export default async function TicketCart() {
  const ticketList = await useTicketData();
  
  return <TicketList list={ticketList} />
}
