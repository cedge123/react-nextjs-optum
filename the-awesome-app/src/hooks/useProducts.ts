import { Product } from "@/app/models/product";
import { useEffect, useState } from "react";
import useTitle from "./useTitle";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function useProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    //const url = 'http://localhost:9000/products';
    const url = 'http://localhost:9000/secure_products';
    const controller = new AbortController();
    const auth = useSelector((state: AppState) => state.auth)
    const route = useRouter();

    useTitle("Product List")

    async function fetchProducts() {

        if (!auth.isAuthenticate) {
           route.push("/login")
           return
        }

        try {
            const headers = { "Authorization": `Bearer ${auth.accessToken}` }
            let response = await axios.get<Product[]>(url, { signal: controller.signal, headers });
            setProducts(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
        // return is similar like destory fun. cals when comp unmount
        return () => {
            // avoids memory leaks, on destroy(when switch anyother component) automatically it cancels the api call. 
            controller.abort();
        }
    }, [])

    return { products, setProducts, fetchProducts };
}