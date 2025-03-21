// "use client"

import { Product } from "@/utils/types";
// import { useEffect } from "react";

export const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const products = data.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
    } as Product;
  });

  return products;
};

// export const useProductsData = async (
//   callbackData: (products: Product[]) => void,
//   callbackError: (error: boolean) => void
// ) => {
//   useEffect(() => {
//     fetchProducts()
//       .then((products) => callbackData(products))
//       .catch((e) => callbackError(true));
//   }, []);
// };
