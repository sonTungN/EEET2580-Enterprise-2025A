import { fetchProducts } from "@/hooks/useProductsData";
import React from "react";
import ProductList from "./ProductList";

export default async function ProductPage() {
  const products = await fetchProducts();
  return <ProductList products={products} />;
}
