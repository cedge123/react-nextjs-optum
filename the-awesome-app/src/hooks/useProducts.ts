import { Product } from "@/app/models/product";
import { useEffect, useState } from "react";
import useTitle from "./useTitle";
import axios from "axios";
const url = 'http://localhost:9000/products';
export default function useProducts(){

     const[products, setProducts] = useState<Product[]>([]);
     useTitle("Product List")
   
     async function fetchProducts() {
        try {
            let response  = await axios.get<Product[]>(url);
            setProducts(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[])

    return {products, setProducts, fetchProducts};
}