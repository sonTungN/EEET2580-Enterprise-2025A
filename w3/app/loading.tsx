import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Loading() {
  return (
    <main className="container mx-auto py-6">
      <div className="overflow-x-auto">
        <Table className="table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center w-[80px]">Image</TableHead>
              <TableHead className="w-[130px]">Name</TableHead>
              <TableHead className="text-center w-[80px]">Price</TableHead>
              <TableHead className="w-[500px]">Description</TableHead>
              <TableHead className="w-[60px]">Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell className="flex justify-center">
                  <Skeleton className="h-[80px] w-[80px] object-cover" />
                </TableCell>
                <TableCell className="whitespace-normal break-words">
                  <Skeleton className="w-1/2 h-2" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="w-1/2 h-2" />
                </TableCell>
                <TableCell className="whitespace-normal break-words text-justify">
                  <Skeleton className="w-1/2 h-2" />
                </TableCell>
                <TableCell className="m-4 whitespace-normal break-words">
                  <Skeleton className="w-1/2 h-2" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
