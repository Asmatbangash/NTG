import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Context creation with default value
export const AllTokenStore = createContext({
  allTokens: []
});

function TokenStore({ children }) {
  const [allTokens, setAllTokens] = useState([]);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const res = await axios.get("http://localhost:2020/api/all-tokens");
        setAllTokens(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTokens();
  }, []);

  return (
    <AllTokenStore.Provider value={{ allTokens }}>
      {children}
    </AllTokenStore.Provider>
  );
}

export default TokenStore;
