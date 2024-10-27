import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";


export default function Catalog(){
    const [products, SetProducts] = useState<Product[]>([]);

  useEffect(()  => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => SetProducts(data))
  }, [])

  
    return(
    <>
        <ProductList products={products} />
    </>
    )
}