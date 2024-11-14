import React from 'react'
import './Login.css'

function Login() {
  return (
  <div className="container my-5" style={{minHeight: '100vh'}}>
      <h1 className='text-center'>LogIn</h1>
<form class="login-form">
  <input placeholder="Enter your name" class="input" type="text" />
  <input placeholder="Enter your email" class="input" type="text" />
    <input placeholder="*********" class="input" type="password" />
  <button>Submit</button>
</form>
  </div>
    
  )
}

export default Login