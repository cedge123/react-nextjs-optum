//<ProductView product={product}/>
"use client"

import React from "react"
import { Product } from "../models/product"
import styles from '../products/products.module.css'

type ProdcuctViewPros = {
    product:Product;
    onDelete:(id:number)=>void;
    onEdit:(product:Product)=>void;
}

export const ProductView: React.FC<ProdcuctViewPros> = React.memo(({product,onDelete,onEdit}) => {
 console.log("product view child" + product.id);
    return (
           <div key={product.id} className={styles.product}>
                            <p>Id: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>Price: {product.price}</p>
                            <p>Desc: {product.description}</p>
                        <div>    
                            <button className="btn btn-warning" onClick={()=>{onDelete(Number(product.id))}}>Delete</button> &nbsp;&nbsp;
                             <button className="btn btn-info" onClick={()=>{onEdit(product)}}>Edit</button>
                        </div>
            </div>
    )

})