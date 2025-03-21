"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/utils/types";
import { Skeleton } from "./ui/skeleton";

export default function ProductTable({ products }: { products: Product[] }) {
  return (
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
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[80px] max-w-[80px] object-cover"
                  />
                </TableCell>
                <TableCell className="whitespace-normal break-words">
                  {product.title}
                </TableCell>
                <TableCell className="text-center w-[100px]">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="whitespace-normal break-words text-justify">
                  {product.description}
                </TableCell>
                <TableCell className="m-4 whitespace-normal break-words">
                  {product.category}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
