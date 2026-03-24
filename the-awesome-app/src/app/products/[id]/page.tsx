'use client'
import { Product } from "@/app/models/product";
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";



const url = 'http://localhost:9000/products';

export default function EditPrduct(){

    const[product, setProduct] = useState<Product>();
  
    const params = useParams();


    //cals on inital on mount
    useEffect(()=> {
        fetchProduct();
    },[]);

    async function fetchProduct() {
        const productUrl = url + "/"+params.id;
        let response  = await axios.get<Product>(productUrl);
        setProduct(response.data)
    }

    function handleInputChange(){
  
    }


    
    return (
        <div>
            <h4>Edit Product</h4>
            <div>
            <form>
                <div className="form-group">
                <label htmlFor="username">ProductName</label>
                 <input  type="text" value={product?.name}  id="prodname" onChange={handleInputChange} className="form-control" placeholder="productName"/>
                </div>
                <div className="form-group">
                <label htmlFor="price">price</label>
                 <input type="text" value={product?.price}  id="price" onChange={handleInputChange} className="form-control" placeholder="price"/>
                </div>
                <div className="form-group">
                <label htmlFor="description">description</label>
                 <input type="text" value={product?.description}  id="description" onChange={handleInputChange} className="form-control" placeholder="description"/>
                </div>
                <br/>
                <button className="btn btn-success">Update</button>
            </form>
            </div>
        </div>
    )
}