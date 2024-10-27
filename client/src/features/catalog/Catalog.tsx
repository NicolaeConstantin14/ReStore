import agent from "../../app/api/agent";
import LoadingComponents from "../../app/layout/LoadingComponents";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";


export default function Catalog(){
    const [products, SetProducts] = useState<Product[]>([]);
    const [loading, setloading] = useState(true);

  useEffect(()  => {
    agent.Catalog.list()
    .then(products => SetProducts(products))
    .catch(error => console.log(error))
    .finally(() => setloading(false))
  }, [])

  if (loading) return <LoadingComponents message='Loading products...'/>
    return(
    <>
        <ProductList products={products} />
    </>
    )
}