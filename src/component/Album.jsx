import React from 'react'
import album1 from '../assets/images/album1.png'
import album2 from '../assets/images/album2.png'
import album3 from '../assets/images/album3.png'


function Album() {
  return (
    <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img src={album1} alt="" width='100%' height='200'/>
            <div className="card-body">
                <h4>Identity Documents</h4>
              <p className="card-text">To register for an identity document with NADRA , please read more about identity documents .</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src={album2} alt=""  width='100%' height='200'/>
            <div className="card-body">
                <h4>Pakistan Origin Card</h4>
              <p className="card-text">
              Pakistan Origin Card (POC) program endeavors to provide eligible foreigners.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src={album3} alt=""  width='100%' height='200'/>
            <div className="card-body">
                <h4>Succession Certificate</h4>
              <p className="card-text">
              Succession Certificate and Letter of Administration is issued to successor on behalf of deceased person</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Album