'use client'

import { checkForUniqueIdAction, saveForm } from "@/actions/checkUniqueIdAction";
import { FocusEvent, useEffect, useRef } from "react"
import { useFormState, useFormStatus } from "react-dom";

function Submit(){

    const status = useFormStatus();
    return (

        <div>
             {/* <div className="alert alert-danger">
                        {status? status.pending + " " + status.method + " " + status.data + " " + status.action : ""}
                </div> */}
                <button disabled={status.pending}>Save</button>
        </div>
       
    )
}

export default function AddProduct() {

    const idRef = useRef<HTMLInputElement>(null);
    const [state, formAction]  = useFormState(saveForm, {status: 0, message: ""});
    const ref = useRef<HTMLFormElement>(null)
    useEffect(() => {

        if(state.status === 1){
            ref.current?.reset();
            
        }


    }, [state])
    
    async function checkForUniqueId(e: FocusEvent) {

        e.preventDefault()
            const id = idRef.current?.value;
            const resp = await checkForUniqueIdAction(Number(id));
            
            console.log(resp.message);
            console.log(resp.status);
    }

    return (
        <div>
            <h4>Add New Product</h4>

            

            <form action={formAction} ref={ref}>

                <div className="alert alert-danger">
                        {state? state.message : ""}
                </div>
               
                <div className="form-group">
                    <label htmlFor="id">Id</label>
                    <input ref={idRef} className="form-control" type="text" placeholder="Id" id="id" name="id" onBlur={checkForUniqueId}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" placeholder="Name" id="name" name="name" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" placeholder="Price" id="price" name="price" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Desc</label>
                    <input className="form-control" type="text" placeholder="Desc" id="desc" name="desc" required/>
                </div>
                <br/>
                <div>
                    <Submit/>
                </div>
            </form >
        </div>

    )

}