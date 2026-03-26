'use client'
import { AppThemeContext } from "@/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";

export default function AppBar(){

    const theme = useContext(AppThemeContext)

    function handleSwitchTheme(){
        theme.changeTheme(theme.mode ==='dark'?'light':'dark');
        console.log("theme,"+ theme.mode)
    }
    return (
        <nav className={`navbar navbar-${theme.mode} bg-${theme.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Next.js</Link>
                  <ul className="nav">
                    <li className="nav-item" >
                        <Link  className="nav-link "  href="/">Home</Link>
                    </li>
                    <li className="nav-item" >
                        <Link  className="nav-link" href="/about">about</Link>
                    </li>
                    <li className="nav-item" >
                        <Link  className="nav-link" href="/login">login</Link>
                    </li>
                    <li className="nav-item" >
                        <Link  className="nav-link" href="/products">products</Link>
                    </li>
                    <li className="nav-item" >
                        <Link className="nav-link" href="/gadgets">gadgets</Link>
                    </li>
                    <li className="nav-item" >
                        <Link  className="nav-link" href="/viewcart">viewcart</Link>
                    </li>
                     <li className="nav-item" >
                        <Link  className="nav-link" href="/customers">Customers</Link>
                    </li>
                     <li className="nav-item" >
                        <Link  className="nav-link" href="/supliers">Suppliers</Link>
                    </li>

                    <li className="nav-item" >
                        <button  className="btn btn-warning" onClick={handleSwitchTheme}>SwitchTheme</button>
                    </li>
                </ul>
            </div>
        </nav>        
       )
}