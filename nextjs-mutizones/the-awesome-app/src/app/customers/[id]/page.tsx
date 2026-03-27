import { Customer } from "@/model/Customer";
import Link from "next/link";

type CustomerViewPageProps = {
    params: {id: number}
}

export default async function CustomerViewPage(props: CustomerViewPageProps){

    const url = "http://localhost:9000/customers/" + props.params.id;
    const response = await fetch(url);
    const customer = await response.json() as Customer;

    return (
        <div>
            <h3>Customer View: {props.params.id}</h3>

            <div className="alert alert-secondary">
                {customer.name} is located at {customer.location}
            </div>

            <Link href="/customers">Back</Link>
        </div>
    )
}