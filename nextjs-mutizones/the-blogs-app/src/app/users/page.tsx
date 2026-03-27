import { User } from "@/model/User";
import Link from "next/link";
//import axios from "axios"

export default async function CustomersPage(){

   
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
  
   
    const usersResponse  = await fetch(usersUrl);       
    const users = await usersResponse.json() as User[];

    return (
        <div>
            <h3>Users</h3>
            <table className="table">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td> <Link href={`/users/${user.id}`}>{user.name}</Link> </td>
                                <td>{user.username}</td>
                                
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
          

        </div>
    )

}