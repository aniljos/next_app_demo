

import { Supplier } from "@/model/Supplier";
import {GET} from '../../api/suppliers/route';


import Link from "next/link";

async function Suppliers(){

    const response = await fetch('http:/localhost:3001/api/suppliers');
    const state = await response.json() as Supplier[];
    console.log("state", state);
    return (
        <div>
            <h4>Suppliers</h4>
            <table className="table">
                <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Contact Person</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Actions</th>
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