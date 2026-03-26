'use client'
import Link from "next/link"
import { Supplier } from "../models/Supplier"
import { useState } from "react"

type SearchSuppliers = {
    data: Supplier[]
}

export default function SearchSuppliers({ data }: SearchSuppliers) {

    const [searchTerm, setSearchTerm] = useState('');
    const [dataA, setDataA] = useState(data);

    // The Search Logic
    const searchSuppliers =() => dataA.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        item.contactPerson.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        item.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        item.location.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    )



    return (
        <div>
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Seach Supplier</label>
                        <input
                            type="text"
                            id="suplier-search"
                            className="form-control"
                            placeholder="Search supplier..."
                            value={searchTerm} 
                            onChange={(evt) => setSearchTerm(evt.target.value)}></input>
                    </div>
                    <button type="button" className="btn btn-success" onClick={searchSuppliers}>Search</button>
                </form>
            </div>
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
                    {data.map((suplier) => (
                        <tr key={suplier.id}>
                            <td>{suplier.id}</td>
                            <td><Link href={"/customers/" + suplier.id}>{suplier.name}</Link></td>
                            <td>{suplier.contactPerson}</td>
                            <td>{suplier.email}</td>
                            <td>{suplier.location}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>

        </div>
    )
}