//<ProductView product={product}/>
"use client"

import React from "react"
import { Product } from "../models/product"
import styles from '../products/products.module.css'

type ProdcuctViewPros = {
    product: Product;
    onDelete: (id: number) => void;
    onEdit: (product: Product) => void;
}

export const ProductView: React.FC<ProdcuctViewPros> = React.memo(({ product, onDelete, onEdit }) => {
    console.log("product view child" + product.id);
    return (
        <div key={product.id} className={styles.product}>
            <div style={{ display: "flex" }}>
                <div>
                <p>Id: {product.id}</p>
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <p>Desc: {product.description}</p>
                </div>
                <img width={150}
                    height={150}
                    src={product.imageUrl}
                    alt={product.name} style={{ display: 'block' }} />
            </div>

            <div>
                <button className="btn btn-warning" onClick={() => { onDelete(Number(product.id)) }}>Delete</button> &nbsp;&nbsp;
                <button className="btn btn-info" onClick={() => { onEdit(product) }}>Edit</button>
            </div>

        </div>
    )

})