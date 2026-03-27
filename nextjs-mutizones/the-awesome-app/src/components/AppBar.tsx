'use client'

import { AppThemeContext } from "@/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";
export function AppBar() {

  const themeContext = useContext(AppThemeContext);
  const mode = themeContext.mode;

  

  return (
    <nav className={`navbar navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Next.js</Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/gadgets-store">Gadgets Store</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/view-cart">ViewCart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/customers">Customers</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blogs-app">Blogs</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}