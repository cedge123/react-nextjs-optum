'use server'

import path from "path";
import fs from 'fs/promises'
import { Supplier } from "../models/Supplier";
import { redirect } from "next/navigation";


// export async function formSubmit(form:FormData){
//        const supplier:Supplier = Object.fromEntries(form.entries()) as unknown as Supplier;;
//        const filepath = path.join(process.cwd(), "data", "suppliers.json");
//        const fileContent = await fs.readFile(filepath, 'utf-8');
//        const suppliers = JSON.parse(fileContent) as Supplier[];
//        suppliers.push(supplier);

//        await fs.writeFile(filepath,JSON.stringify(suppliers,null,2),'utf-8');
//        console.log("saved supplier server");

//        redirect("/suppliers")     
// }


//export async function formSubmit(form:FormData){
export async function formSubmit(prevStatus:Object,form:FormData){

       const supplier:Supplier = Object.fromEntries(form.entries()) as unknown as Supplier;;
       const filepath = path.join(process.cwd(), "data", "suppliers.json");
       const fileContent = await fs.readFile(filepath, 'utf-8');
       const suppliers = JSON.parse(fileContent) as Supplier[];
       suppliers.push(supplier);

       await fs.writeFile(filepath,JSON.stringify(suppliers,null,2),'utf-8');
       console.log("saved supplier server");

       redirect("/suppliers")

       return {status:1,message:"completed"};
}



