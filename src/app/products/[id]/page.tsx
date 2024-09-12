type EditproductProps = {
    params: {id: number}
}

function Editproduct(props: EditproductProps){

    return (
        <div>
            <h4>Edit Product: {props.params.id}</h4>
        </div>
    )

}

export default Editproduct;