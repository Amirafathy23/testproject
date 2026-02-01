import Image from "next/image";
import { ProductItem } from "./types/productInterface";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./_components/ProductCard/ProductCard";

export default async function Home() {
  let response= await fetch ('https://ecommerce.routemisr.com/api/v1/products'  )


  // ssg static site generation ,
  //  ssr server side render 
  // , isr
  //  csr client side render
 let {data : allProducts}:{data : ProductItem[]} = await response.json()
 
  
  return (
   <>
  <div className="grid md:grid-cols-3 mt-5 lg:grid-cols-4 xl:grid-cols-5 gap-5">
    {allProducts.map((prod)=> <ProductCard key={prod._id} prod={prod}/>)}

  </div>

   </>
  );
}
