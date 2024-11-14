import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

function GetTokenData() {
  const [tokenData, setTokenData] = useState(); // Initialize as null
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  useEffect(() => {
    axios
      .get('http://localhost:2020/api/one-token')
      .then((res) => setTokenData(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    
    <div className="container d-flex flex-column justify-content-center align-items-center w-100 h-100 my-5 py-5">
      <button className="btn btn-primary mb-4" onClick={reactToPrintFn}>
        Print
      </button>
      {tokenData ? (
        <div
          className="card m-2 text-center shadow-lg p-3 mb-5 bg-success text-white rounded"
          style={{ width: '15rem' }}
          ref={contentRef}
        >
          <div className="card-body">
            <h6 className="card-title">Name : {tokenData.name || 'N/A'}</h6>
            <h6 className="card-title">Father Name : {tokenData.FatherName || 'N/A'}</h6>
            <p className="card-text">
              Token Number : <b>{tokenData.tokenNumber || 'N/A'}</b>
            </p>
            <h6>
              {tokenData.createdAt
                ? new Date(tokenData.createdAt).toLocaleString()
                : 'N/A'}
            </h6>
          </div>
        </div>
      ) : (
        <p>Loading token data...</p>
      )}
    </div>
  );
}

export default GetTokenData;
