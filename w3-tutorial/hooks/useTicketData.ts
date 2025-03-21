import { Ticket } from "@/types/Ticket";

export const useTicketData = async () => {
  const response = await fetch("http://localhost:8080/ticket");
  const data = (await response.json()) as Ticket[];
  
  return data;
}