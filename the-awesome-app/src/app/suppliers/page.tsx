import Link from "next/link";
import { Supplier } from "../models/Supplier";
import SearchSuppliers from "./SearchSuppliers";
import SearchSuppliersActions from "./SearchSuppliersAction";
// this server component we should not write any hooks,
// it just have plain db or api logic to feath data!
export default async function SuppliersPage() {

    // async function fetchSuppliers(query?: any) {
    //     const response = await fetch("http://localhost:3000/api/suppliers?q=" + query)
    //     const suppliers = await response.json();
    //     return suppliers;
    // }

    // const supplier = await fetchSuppliers()

    async function fetchSuppliersAsync(query?: any) {
        'use server' // server function
        console.log(query)
        const response = await fetch("http://localhost:3000/api/suppliers?q=" + query)
        const suppliers = await response.json() as Supplier[];
        return (
           <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            Suplier Id
                        </th>
                        <th>
                            Suplier Name
                        </th>
                        <th>
                            Suplier Contact Person
                        </th>
                        <th>
                            Suplier email
                        </th>
                        <th>
                            Suplier location
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map((suplier) => (
                        <tr key={suplier.id}>
                            <td>{suplier.id}</td>
                            <td>{suplier.name}</td>
                            <td>{suplier.contactPerson}</td>
                            <td>{suplier.email}</td>
                            <td>{suplier.location}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        );
    }

    return (
        <div>
            <h4>Suppliers Listing</h4>
            
            <Link href="/suppliers/add">Add New Supplier</Link>&nbsp;
            <br/>
            {/* <SearchSuppliers data={supplier}/> */}
            <SearchSuppliersActions suppliers={fetchSuppliersAsync}></SearchSuppliersActions>
        </div>
    )

}