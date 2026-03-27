import { Customer } from "@/model/Customer";
import Link from "next/link";
//import axios from "axios"

export default async function CustomersPage(){

    const url = "http://localhost:9000/customers";
    //const response = await axios.get<Customer[]>(url);
    //const customers = response.data;
    const response  = await fetch(url);       //fetch(url, {method: "GET"})
    const customers = await response.json() as Customer[];

    return (
        <div>
            <h3>Customers</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        return (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td> <Link href={`/customers/${customer.id}`}>{customer.name}</Link> </td>
                                <td>{customer.location}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>
    )

}