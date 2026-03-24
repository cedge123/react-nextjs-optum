'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../models/product";
import styles from '../products/products.module.css'
import { useRouter } from "next/navigation";

const url = 'http://localhost:9000/products';



export default function ProductList(){

    const[products, setProducts] = useState<Product[]>([]);
    const router = useRouter();

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

   async function deleteProduct(id:any){
        try {
            let deleteUrl = url+"/"+id
            let response  = await axios.delete(deleteUrl);
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
    }

    function editPrduct(product:Product) {
         router.push("/products/"+product.id);
    }


    return (
       <div>
        <h4>List Products</h4>
        <div style={{display:"flex",flexFlow:"row wrap",justifyContent:"center"}}>
        {
            products.map((product=>{
                    return  (
                        <div key={product.id} className={styles.product}>
                            <p>Id: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>Price: {product.price}</p>
                            <p>Desc: {product.description}</p>
                            <div>
                                <button className="btn btn-warning" onClick={()=>{deleteProduct(product.id)}}>Delete</button> &nbsp;&nbsp;
                                <button className="btn btn-info" onClick={()=>{editPrduct(product)}}>Edit</button>
                            </div>
                        </div>
                    )
                }))
        }
        </div>
       </div>
    );
}