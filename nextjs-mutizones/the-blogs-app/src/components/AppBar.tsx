'use client'


import Link from "next/link";

export function AppBar() {


  return (
    <nav className={`navbar navbar-dark bg-dark`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Next.js</a>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/users">Users</Link>
          </li>
          
          
        </ul>
      </div>
    </nav>
  )
}