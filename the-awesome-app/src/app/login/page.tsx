'use client'
import { SubmitEvent, useState } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation";

export default function Login(){

    const [userName,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const router = useRouter();
    
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
                <input type="text" value={userName} onChange={(evt)=>{setUsername(evt.target.value)}} id="username" className="form-control" placeholder="User Id"/>
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