import React, {  useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function TokenForm({displayToken, setDisplayToken}) {
  const [name, setName] = useState()
  const [FatherName, setFatherName] = useState()
  let navigate = useNavigate()

  const handlTokenData = async (e) =>{
    e.preventDefault()
    try{
      const response  = await axios.post('http://localhost:2020/api/token', {name, FatherName})
      navigate('/token-data')
      console.log(response)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="col-md-10 mx-auto col-lg-5 position-absolute top-50 start-50 translate-middle" style={{display:displayToken}}>
    <form className="p-4 p-md-5 border rounded-3 text-black bg-dark-subtle" onSubmit={handlTokenData}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="enter full name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">Full Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="enter full name"
          required
          onChange={(e) => setFatherName(e.target.value)}
        />
        <label htmlFor="name">Father Name</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        submit
      </button> 
    </form>
      <button className="w-100 btn btn-lg btn-warning my-2" onClick={()=>setDisplayToken('none')}>
        cancel
      </button>
  </div>
  )
}

export default TokenForm