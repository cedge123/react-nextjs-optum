import { User } from "@/model/User";
import Link from "next/link";

type UserPageProps = {
    params: {id: number}
}

export default async function UserPage(props: UserPageProps){

    const url = "https://jsonplaceholder.typicode.com/users/" + props.params.id;
    const response = await fetch(url);
    const user = await response.json() as User;

    return (
        <div>
            <h3>Customer View: {props.params.id}</h3>

            <div className="alert alert-secondary">
                {user.name} is located at {user.address.city} and works for {user.company.name}
            </div>

            <Link href="/users">Back</Link>
        </div>
    )
}