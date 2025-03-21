"use client";

import React, { Suspense, useEffect, useState } from "react";

import { Input } from "./ui/input";
import { fetchProducts, useProductsData } from "@/hooks/useProductsData";
import { Product } from "@/utils/types";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import { Button } from "./ui/button";

export default function ProductList({ products }: { products: Product[] }) {
  const [initialList, setInitialList] = useState<Product[]>(products);
  const [list, setList] = useState<Product[]>(products);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [itemNum, setItemNum] = useState(10);

  // useProductsData(
  //   (list) => {
  //     setInitialList(list);
  //     setList(list);
  //   },
  //   (isError) => setIsError(isError)
  // );

  useEffect(() => {
    setList(initialList.slice(0, itemNum));
  }, []);

  const handleQuery = (value: string) => {
    setQuery(value);

    if (value.trim() === "") {
      setList(initialList);
    } else {
      const filtered = initialList.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setList(filtered);
    }
  };

  const handleOnClick = () => {
    const newItemNum = itemNum + 10;
    setItemNum(newItemNum);
    const updatedList = initialList.slice(itemNum, newItemNum);
    setList([...list, ...updatedList]);
  };

  return (
    <main className="container mx-auto py-6">
      <SearchBar query={query} handleQuery={handleQuery} />

      {isError ? (
        <div>Fetching products error...</div>
      ) : (
        <>
          <ProductTable products={list} />
          <Button
            className="w-full mt-4"
            onClick={() => {
              console.log("Clicked");
              handleOnClick();
            }}
          >
            Load More
          </Button>
        </>
      )}
    </main>
  );
}
