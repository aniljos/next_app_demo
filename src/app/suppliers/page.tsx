'use client'

import { Supplier } from "@/model/Supplier";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

function Suppliers(){

    const [state, setState] = useState<Supplier[]>([]);
    useEffect(() => {

        fetchSuppliers();

    }, [])
    useEffect(() => {
        console.log(state);
    }, [state])

    async function fetchSuppliers(){
        try {
            
            const response = await axios.get<Supplier[]>("/api/suppliers");
            setState(response.data);

        } catch (error) {
            alert("Failed to fetch data");
        }
    }


    return (
        <div>
            <h4>Suppliers</h4>
            <table className="table" data-bs-theme="dark">
                <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Contact Person</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map(item => {
                        return (
                            <tr key={item.id}>
                                
                                <td><Link href={`/suppliers/${item.id}`}>{item.name}</Link></td>
                                <td>{item.contactPerson}</td>
                                <td>{item.email}</td>
                                <td>{item.location}</td>
                               
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Suppliers;