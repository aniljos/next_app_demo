'use client'

import { Product } from "@/model/Product"
import axios from "axios"
import React from "react"
import { useRouter, usePathname,  } from "next/navigation"


type ProductViewProps = {
    product: Product,
    onDelete?: (product:Product) => void
}


const ProductView: React.FC<ProductViewProps> = ({ product, onDelete }) => {

    console.log("rendering ProductView")
    const router = useRouter();
    const pathname = usePathname();

    function deleteProduct(){

        if(onDelete){
            onDelete(product);
        }
        
    }

    function editProduct(){

        
        router.push(`${pathname}/${product.id}`);
    }

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <div>
                <button onClick={deleteProduct}>Delete</button> &nbsp;
                <button onClick={editProduct}>Edit</button>
            </div>
        </div>
    )
}

export default React.memo(ProductView);