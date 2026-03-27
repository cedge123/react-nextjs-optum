'use client'

import { useLogin } from "./useLogin"



export default function LoginPage() {

    
    const {message, handleSubmit, 
        usernameInputRef, username, password, handleUsernameChange, setPassword} = useLogin();

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