'use client'
import { Product } from "@/model/Product";
import axios from "axios"
import styles from './page.module.css'
import ProductView from "./components/ProductView";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import { Metadata } from "next";




 function ListProducts(){

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setLoading] = useState(true);
    const loadingMessage = "loading...pls wait"
    const [searchkey, setsearchkey] = useState("");
    const auth = useSelector((state: AppState) => state.auth);

    useEffect(() => {

        console.log("in useeffect")
        fetchProducts();

    }, [])

    async function fetchProducts(){
        try {
            console.log("in fetchProducts")
            setLoading(true)
            //await new Promise(resolve => setTimeout(resolve, 5000));
            //const url = process.env.NEXT_PUBLIC_PRODUCTS_BASE_URL;
            const url = "http://localhost:9000/products";
            console.log(url);
            if(url){
                const response = await axios.get<Product[]>(url);
                setProducts(response.data);


               // const resp = await axios.get("/api/users");
              //  console.log("users", resp.data);
            }
           
        } catch (error) {
            
        }
        finally{
            setLoading(false)
        }
    }

    // const deletedProduct = useCallback((product:Product) => {
    //     try {
            

    //         axios.delete(`http://localhost:9000/products/${product.id}`);
    //         fetchProducts();

    //     } catch (error) {
            
    //     }
    // }, [])

    function deleteProduct(product:Product){
        try {
            

            axios.delete(`http://localhost:9000/products/${product.id}`);
            fetchProducts();

        } catch (error) {
            
        }
    }

    return (
        <div>
            <h4>List Products</h4>
            {isLoading?<div className="alert alert-primary">{loadingMessage}</div>: null}
            <div>
                <input className="form-control" type="search" value={searchkey} onChange={e => setsearchkey(e.target.value)} />
                <p>Seraching for {searchkey}</p>
            </div>
            <div style={{display: "flex", flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map((product) => {
                    return (
                        <div key={product.id} className={styles.product}>
                            <p>{product.name}</p>
                            {/* <ProductView product={product} onDelete={deleteProduct}/> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default ListProducts