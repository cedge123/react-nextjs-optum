'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../models/product";
import styles from '../products/products.module.css'

const url = 'http://localhost:9000/products';

export default function ProductList(){

    const[products, setProducts] = useState<Product[]>([]);

    async function fetchProducts() {
        try {
            let response  = await axios.get<Product[]>(url);
            console.log(response);
            setProducts(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        fetchProducts();
    },[]);

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
                                <button className="btn btn-warning">Delete</button> &nbsp;&nbsp;
                                <button className="btn btn-info">Edit</button>
                            </div>
                        </div>
                    )
                }))
        }
        </div>
       </div>
    );
}