import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AllTokenStore } from "../context/TokenStore";

function AllTokens() {
  let {allTokens} = useContext(AllTokenStore)
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  
 
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Helper function to check if a token is expired
  const isTokenExpired = (expiresAt) => {
    return new Date() > new Date(expiresAt);
  };

  return (
    <>
      <div className="px-4 py-2 text-center">
        <h4>--NADRA--</h4>
        <h1 className="display-5 fw-bold text-body-emphasis">
          Identity <span style={{ color: "#006600" }}>Tokens</span>
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          The token expires 24 hours after issuance, so please complete the process within this time.
          </p>
          <button className="btn btn-primary mb-4" onClick={reactToPrintFn}>
            Print
          </button>
        </div>
      </div>
      <div className="container d-flex flex-wrap justify-content-center" ref={contentRef}>
        {allTokens.map((data) => (
          <div
            className={`card m-2 text-center shadow-lg p-3 mb-5 rounded text-white ${isTokenExpired(data.expiresAt) ? 'bg-danger' : 'bg-success'}`}
            style={{ width: "15rem" }}
            key={data.tokenNumber}
            data-aos="flip-left"
          >
            <div className="card-body">
              <h6 className="card-title">Name: {data.name}</h6>
              <h6 className="card-title">Father Name: {data.FatherName}</h6>
              <p className="card-text">
                Token Number: <b>{data.tokenNumber}</b>
              </p>
              <h6>Created At: {data.createdAt ? new Date(data.createdAt).toLocaleString() : 'N/A'}</h6>
              <h6>
                Expiry Status: {isTokenExpired(data.expiresAt) ? 'Expired' : 'Active'}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllTokens;
