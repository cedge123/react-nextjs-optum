'use client'
import { SubmitEvent, useEffect, useRef, useState } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation";
import useTitle from "@/hooks/useTitle";

export default function Login(){

    const [userName,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const router = useRouter();
    const usernameRef = useRef<HTMLInputElement>(null);

    // use effecte is invoked once when the component is mounted 
    // and when dependents also get updated
    console.log("login rendered")
    useEffect(()=>{
        console.log("login mounted");
        usernameRef.current?.focus();
        //when login unmounted
        return ()=>{
            console.log("login unmounted");
        }
    }, []);


   // write in a reusabl hook across applicatin use!
    // useEffect(()=>{
    //     document.title = document.title+' Login';
    // },[]}
    useTitle("Login")

    async function handleLogin(event:SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        if(userName&&password){
           //valid creds
           const url = 'http://localhost:9000/login';
           try{
             const reponse = await axios.post(url,{name:userName,password:password});
             console.log(reponse);
             setMessage("");
             router.push("/")
            }catch(error:any){
              console.log("errorResponse", error);
              setMessage(error.message);
           }
        }
        else
          setMessage("please enter username and password!!!");
    }
   
    return (
        <div>
            <h4>Login</h4>
            {message?<div className="alert alert-warning">{message}</div>:null}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                <label htmlFor="username">UserName</label>
                <input ref={usernameRef} type="text" value={userName} onChange={(evt)=>{setUsername(evt.target.value)}} id="username" className="form-control" placeholder="User Id"/>
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(evt)=> {setPassword(evt.target.value)}} id="password" className="form-control" placeholder="Password"/>
                </div>
                <br/>
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    )

}