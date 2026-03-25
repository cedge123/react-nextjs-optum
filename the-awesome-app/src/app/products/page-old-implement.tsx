"use client"

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Product } from "../models/product";
import { useRouter } from "next/navigation";
import { ProductView } from "./ProductView";
import useTitle from "@/hooks/useTitle";

const url = 'http://localhost:9000/products';



export default function ProductList(){

    const[products, setProducts] = useState<Product[]>([]);
    const router = useRouter();
    useTitle("Product List")

    const [messagevisible, setMessageVisible] = useState<boolean>();
    console.log("product parent");
    useEffect(()=> {
        fetchProducts();
    },[]);

    async function fetchProducts() {
        try {
            let response  = await axios.get<Product[]>(url);
            console.log(response);
            setProducts(response.data)
        } catch (error) {
            console.log(error);
        }
    }

   const deleteProduct = useCallback(async (id:any)=> {
        try {
            let deleteUrl = url+"/"+id
            let response  = await axios.delete(deleteUrl);
            console.log(response.status)
            if(response.status==200){
                //await fetchProducts();
                //copy of products
                const copy_of_product = [...products];
                copy_of_product.splice(copy_of_product.findIndex(item=> item.id === id));
                setProducts(copy_of_product);
            }
        } catch (error) {
            console.log(error);
        }
    },[products])

    const editPrduct = useCallback((product:Product) => {
         router.push("/products/"+product.id);
    },[])

    const  calulatTotalPrice = useMemo(()=>{
        let total = 0;
        console.log("calculate total price invoked..")
        products.forEach(product=>{
            total+= product.price||0;
        })
        return total;
    },[products])


    return (
       <div>
        <h4>List Products</h4>
        <div>totla price: {calulatTotalPrice}</div>
        {messagevisible? <div> This is a demo page product</div>:null}
        <button className="btn" onClick={() => { setMessageVisible(prev => !prev) }}>
            {messagevisible?"HIDE":"SHOW"}
        </button>
        <div style={{display:"flex",flexFlow:"row wrap",justifyContent:"center"}}>
        {
            products.map((product=>{
                    return  (
                        <ProductView key={product.id} product={product} onDelete={deleteProduct} onEdit={editPrduct}/>
                        // <div key={product.id} className={styles.product}>
                        //     <p>Id: {product.id}</p>
                        //     <p>Name: {product.name}</p>
                        //     <p>Price: {product.price}</p>
                        //     <p>Desc: {product.description}</p>
                        //     <div>
                        //         <button className="btn btn-warning" onClick={()=>{deleteProduct(product.id)}}>Delete</button> &nbsp;&nbsp;
                        //         <button className="btn btn-info" onClick={()=>{editPrduct(product)}}>Edit</button>
                        //     </div>
                        // </div>
                    )
                }))
        }
        </div>
       </div>
    );
}