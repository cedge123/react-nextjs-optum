'use client'
import { Product } from "@/app/models/product";
import axios from "axios";
import { useParams, useRouter } from "next/navigation"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";



const url = 'http://localhost:9000/products';

export default function EditPrduct(){

    const[product, setProduct] = useState<Product>();

   
  
    const params = useParams();
    const route = useRouter();


    //cals on inital on mount
    useEffect(()=> {
        fetchProduct();
    },[]);

    async function fetchProduct() {
       try {
         const productUrl = url + "/"+params.id;
         let response  = await axios.get<Product>(productUrl);
         setProduct(response.data)
       } catch (error) {
        console.log(error);
       }
    }

    async function updateProduct(evt:MouseEvent<HTMLButtonElement>) {
        evt.preventDefault();// preventDefault not required if we use button type as button!
       try {
         const updateProduct = url + "/"+params.id;
         let response  = await axios.put(updateProduct,product);
         if(response.status==200){
            route.back();
         }
       } catch (error) {
        console.log(error);
       }
    }
 
    // I have directly arrow function written at button level. 
    function cancel(evt:MouseEvent<HTMLButtonElement>){
         evt.preventDefault();// preventDefault not required if we use button type as button!
         route.back();
    }

    //which is common for all the inputs
    const handleInputChange = (e:any)=> {
      const {name,value} = e.target;
        setProduct((prev) => ({
        ...prev,          // Copy all existing properties
        [name]: value     // Override ONLY the property matching the input 'name'
        }));
    }
    function handleNameChange(evt:ChangeEvent<HTMLInputElement>){
            // const value = evt.target.value;
            // const copyObj = {...product};
            // copyObj.name = value;
            // setProduct(copyObj);

            // or

            // this line also directly can implement at html with arrow function.
            setProduct({...product, name:evt.target.value}); 
    }


    
    return (
        <div>
            <h4>Edit Product - {params.id}</h4>
            <div>
            <form>
                <div className="form-group">
                <label htmlFor="username">ProductName</label>
                 <input name="name" type="text" value={product?.name}  id="prodname" onChange={(evt)=>{setProduct({...product, name:evt.target.value})}} className="form-control" placeholder="productName"/>
                </div>
                <div className="form-group">
                <label htmlFor="price">price</label>
                 <input name="price" type="text" value={product?.price}  id="price" onChange={(evt)=>{setProduct({...product, price:Number(evt.target.value)})}} className="form-control" placeholder="price"/>
                </div>
                <div className="form-group">
                <label htmlFor="description">description</label>
                 <input  name="description" type="text" value={product?.description}  id="description" onChange={(evt)=>{setProduct({...product, description:evt.target.value})}} className="form-control" placeholder="description"/>
                </div>
                <br/>
                <button type="button" className="btn btn-success" onClick={updateProduct}>Save</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-warning" onClick={()=>{route.back()}}>Cancel</button>
            </form>
            </div>
        </div>
    )
}