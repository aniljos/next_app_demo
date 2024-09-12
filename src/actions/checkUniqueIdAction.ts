'use server'

import axios from "axios";
import { redirect } from "next/navigation";

export async function checkForUniqueIdAction(id: number){
    console.log("invoking checkForUniqueId...");

    return {status: 1, message: "The id is available"}
}

export async function saveForm(prevState: any, formData: FormData){

    
    await new Promise(resolve => setTimeout(() => {resolve("")}, 3000));
    const data = {
        id: formData.get("id"),
        name: formData.get("name"),
        price: formData.get("price"),
        description: formData.get("desc"),
    }
    if(!data.id){
        return {status: 2, message: "Id is requires"}
    }

    try {

        await axios.post("http://localhost:9000/products", data);
        return {status: 1, message: "Created Product"}
        redirect("/products")

    } catch (error) {
        return {status: 2, message: "Failed to save form"}
    }
    


    //console.log("data", data);
    //return {status: 1, message: "Saved form"}


}