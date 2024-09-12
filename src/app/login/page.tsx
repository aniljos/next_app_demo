'use client'

import axios from "axios";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store";

export default function Login(){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    async function login(){
       
            if(!name || !password){
                setMessage("Enter the credentilas")
            }
            else{
                
                try {
                    
                    const response = await axios.post("http://localhost:9000/login", {name, password});
                    setMessage("")
                    dispatch({type: "SET", payload:{
                        isAuthenticated: true,
                        accessToken: response.data.accessToken,
                        refreshToken: response.data.refreshToken,
                        userName: name
                    }});
                    router.push("/products");
                } catch (error) {
                    setMessage("Invalid credentials");
                    dispatch({type: "RESET"})
                }
                
            }

        
    }

    return (
        <div>
            <h2>Login</h2>

            {message ? <div className="alert alert-danger">
                {message}
            </div>: null}

            <div className="form-group">
                <label htmlFor="name">User Name</label>
                <input className="form-control" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <br/>
            <div>
                <button className="btn btn-success" onClick={login}>Login</button>
            </div>
        </div>
    )
}