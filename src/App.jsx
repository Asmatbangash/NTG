import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import { Outlet } from "react-router-dom"
import './App.css'
import TokenStore from "./context/TokenStore"

function App() {
  

  return (
    <TokenStore>
      <Navbar />
      <Outlet />
      <Footer />
    </TokenStore>
  )
}

export default App
