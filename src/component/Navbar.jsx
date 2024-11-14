import React from 'react'
import { MdGeneratingTokens } from "react-icons/md";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md" style={{backgroundColor:'#006600'}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><MdGeneratingTokens className='fs-1 text-white'/><span className='text-white'>Nadra Token</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav col-lg-9 justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-white" >About</Link>
          </li>
          <li className="nav-item">
            <a href="/all-tokens" className="nav-link text-white">All-Tokens</a>
          </li>
          <li className="nav-item">
            <Link  to="/token-history" className="nav-link text-white">Token-History</Link>
          </li>
          <li className="nav-item">
            <Link  to="/contact" className="nav-link text-white">Contact</Link>
          </li>
        </ul>
         <Link to="/login"> <button className='btn btn-primary'>Login</button></Link>
        </div> 
      </div>
  </nav> 
  )
}

export default Navbar