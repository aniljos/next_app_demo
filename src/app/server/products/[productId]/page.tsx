import { Product } from "@/model/Product";

type FetchProductProps = {
    params: {
        productId: number
    }
} 

async function FetchProduct(props: FetchProductProps){

    const response = await fetch(`http://localhost:9000/products/${props.params.productId}`);
    const product = await response.json() as Product;

    return (
        <div>
            <h4>Product</h4>
            <div>
                <p>Id: {product.id}</p>
                <p>Name: {product.name}</p>
                <p>Desc: {product.description}</p>
                <p>price: {product.price}</p>
            </div>
        </div>
    )
}

export default FetchProduct;