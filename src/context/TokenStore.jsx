import React, { createContext, useState, useEffect} from 'react'
import axios from 'axios';

export let allTokenStore = createContext({
  allTokens : []
})



function TokenStore({children}) {
   let [allTokens, setAllTokens] = useState([])
  useEffect(async() => {
   await axios
      .get("http://localhost:2020/api/all-tokens")
      .then((res) => setAllTokens(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
    <allTokenStore.Provider value={{allTokens}}>
      {children}
    </allTokenStore.Provider>
    </div>
  )
}

export default TokenStore