'use client'

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { useTitle } from "@/hooks/useTitle";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();
    const usernameInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    useTitle("Login");

    

    useEffect(() => {
        console.log(usernameInputRef);
        usernameInputRef.current?.focus();
       
    }, [])

    async function handleSubmit(evt: FormEvent<HTMLFormElement>) {

        evt.preventDefault();

        console.log("username", usernameInputRef.current?.value);

        if (!username || !password) {
            setMessage("Enter the credentials");
        }
        else {
            // API call to validate the creds
            const url = "http://localhost:9000/login";
            // axios
            //     .post(url, {name: username, password})
            //     .then((response)=> {
            //         console.log("fullfilled", response);
            //     })
            //     .catch(error => {
            //         console.log("rejected", error);
            //     })

            try {

                const response = await axios.post(url, { name: username, password });
                console.log("fullfilled", response);
                setMessage("");
                //dispatch an action(login)
                dispatch({
                    type: "login", payload: {
                        isAuthenticated: true,
                        username,
                        accessToken: response.data.accessToken,
                        refreshToken: response.data.refreshToken
                    }
                })
                router.push("/products")

            } catch (error) {
                console.log("rejected", error);
                setMessage("Invalid credentials");
                //dispatch an action(logout)
                dispatch({type: "logout"})
            }



        }

    }

    function handleUsernameChange(evt: ChangeEvent<HTMLInputElement>) {

        const value = evt.target.value;
        setUsername(value)

    }

    return (
        <div>

            
            <h3>Login</h3>
            <p>Signin to the application here...</p>

            {message ? <div className="alert alert-danger">{message}</div> : null}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input ref={usernameInputRef} type="text" className="form-control" id="username"
                        value={username} onChange={handleUsernameChange} />
                    {/* <span>You entered {username}</span> */}
                </div>

                <div className="form-group">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" className="form-control" id="pwd" value={password}
                        onChange={evt => setPassword(evt.target.value)} />
                </div>

                <br />

                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}