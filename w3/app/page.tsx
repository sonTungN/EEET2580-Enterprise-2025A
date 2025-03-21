import Loading from "@/components/Loading";
import ProductList from "@/components/ProductList";
import ProductPage from "@/components/ProductPage";
import { fetchProducts } from "@/hooks/useProductsData";
import { Suspense } from "react";

export default async function Home() {
  

  return (
    <ProductPage />
    // <Suspense fallback={<Loading />}>
      
    // </Suspense>
  );
}
