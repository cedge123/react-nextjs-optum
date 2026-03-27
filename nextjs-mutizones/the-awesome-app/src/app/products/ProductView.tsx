// <ProductView product={product}/>

import { Product } from "@/model/Product";
import classes from './page.module.css';
import React from "react";

type ProductViewProps = {
    product: Product;
    onDelete: (product:Product) => Promise<void>;
    onEdit: (product:Product) => void;
}

//export function ProductView(props: ProductViewProps){
export const ProductView: React.FC<ProductViewProps> = React.memo(function ProductView({ product, onDelete, onEdit }){

    console.log("rendering ProductView...")
    return (
        <div key={product.id} className={classes.product}>
            <p>Id: {product.id}</p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <div>
                <button className="btn btn-warning" onClick={() => { onDelete(product) }}>Delete</button>&nbsp;
                <button className="btn btn-secondary" onClick={() => onEdit(product)}>Edit</button>
            </div>
        </div>
    )
})