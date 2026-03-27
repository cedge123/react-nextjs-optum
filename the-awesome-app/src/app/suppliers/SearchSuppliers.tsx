'use client'
import Link from "next/link"
import { Supplier } from "../models/Supplier"
import { useState } from "react"
import axios from "axios"

type SearchSuppliers = {
    data: Supplier[]
}

export default function SearchSuppliers({ data}: SearchSuppliers) {

    const [searchTerm, setSearchTerm] = useState('');
    const [suppliers, setSuppliers] = useState(data);
    
    // ui filter logic
    const searchSuppliers = (searchTerm:any) => {
        // Always filter from the ORIGINAL 'data', not the 'filteredData'
        const results = data.filter((item) => {
            setSearchTerm(searchTerm)
            const term = searchTerm.toLowerCase();

            return (
                item.name.toLowerCase().includes(term) ||
                item.contactPerson.toLowerCase().includes(term) ||
                item.email.toLowerCase().includes(term) ||
                item.location.toLowerCase().includes(term)
            );
        });

        // Update the state used for rendering
        setSuppliers(results);
    };

    
    async function search(){
        try {
            const url = "http://localhost:3000/api/suppliers?q=" + searchTerm;
            const response = await axios.get<Supplier[]>(url);
            setSuppliers(response.data);
        } catch (error) {
            console.log(error);
        }
    }



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
                    </div><br/>
                    <button type="button" className="btn btn-success" onClick={search}>Search</button>
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

        </div>
    )
}