'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {  AppState } from "@/redux/store";
import { ProductView } from "./ProductView";
import { useTitle } from "@/hooks/useTitle";

//const baseUrl = "http://localhost:9000/products";
const baseUrl = "http://localhost:9000/secure_products";

export default function ListProductsPage(){


   
    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();
    const auth = useSelector((state: AppState) => state.auth);
    const [isMessageVisible, setMessageVisible] = useState(false);
    useTitle("ListProducts");

    useEffect(() => {

        fetchProducts();

        return () => {
            //cancelling the call
        }

    }, [])

    async function fetchProducts(){

        try {

            if(!auth.isAuthenticated){
                router.push("/login");
                return;
            }
            

            const headers = {"Authorization": `Bearer ${auth.accessToken}`}
            const response = await axios.get<Product []>(baseUrl, {headers});
            console.log("success", response);
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
    }

    const conatinerStyles = {display: "flex", flexFlow: "row wrap", justifyContent: "center", };

    const deleteProduct = useCallback( async function deleteProduct(product:Product){

        const url = baseUrl + "/" + product.id;
        const headers = {"Authorization": `Bearer ${auth.accessToken}`}
        try {
            
            await axios.delete(url, {headers});
            //await fetchProducts();

            const copy_of_products = [...products]; // ES6 spread operator
            const index = copy_of_products.findIndex(item => item.id === product.id);
            copy_of_products.splice(index, 1);
            setProducts(copy_of_products);

            alert("Product deleted: " + product.id);

        } catch {
            
            alert("Failed to delete product: " + product.id)
        }

    }, [products])


    const editProduct = useCallback(function editProduct(product: Product){

        router.push("/products/" + product.id);

    }, [])

    const totalPrice = useMemo(function(){

        console.log("calculating prices...");
        let totalPrice = 0;
        products.forEach(p => {

            if(p.price)
            totalPrice += p.price;
        })

        return totalPrice;
    }, [products])

    return (
        <div>
            <h3>List Products</h3>

            <div className="alert alert-primary">TotalPrice: {totalPrice}</div>

            {isMessageVisible ? <div className="alert alert-info">This is an example of data fetching in React usin axios</div>: null}
            <br />
            <button className="btn btn-secondary" onClick={() => setMessageVisible(c => !c)}>{isMessageVisible ? "Hide" : "Show"}</button>

            <div style={conatinerStyles}>
                {products.map(product => {

                    return (
                        <ProductView key={product.id} product={product} onDelete={deleteProduct} onEdit={editProduct}/>
                    )
                })}

            </div>
        </div>
    )
}