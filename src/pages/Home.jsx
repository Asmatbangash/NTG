import React, { useState } from 'react'
import './Home.css'
import TokenForm from '../component/TokenForm';
import Services from '../component/Services';

function Home() {
  const [displayToken, setDisplayToken] = useState('none')
  return (
    <>
    <div className='home'>
        <TokenForm displayToken={displayToken} setDisplayToken={setDisplayToken}/>
       <div className="px-4 text-center text-white detail">
    <h1 className="display-5 fw-bold  text-white">No waiting in line more....❌</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">"NO stands in Line More" emphasizes a shift away from traditional waiting in line. It represents a movement no tired and just click on token generating button to  eliminate unnecessary delays. The idea is to optimize time management, no more waiting in physical lines and generate online token.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={()=>setDisplayToken('block')}>Click For Token Generating</button>
      </div>
    </div>
  </div>
         </div>
         <Services />
         </>
  )
}

export default Home;