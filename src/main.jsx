import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import GetTokenData from './component/GetTokenData.jsx'
import AllTokens from './pages/AllTokens.jsx'
import TokenHistory from './component/TokenHistory.jsx'
import Login from './pages/Login/Login.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {
      path : '/', element:<Home />
    },
    {
      path : '/about', element: <About/>
    },
    {
      path : '/all-tokens', element: <AllTokens />
    },
    {
      path : '/contact', element: <Contact />
    },
    {
      path: '/token-data', element: <GetTokenData />
    },
    {
      path: '/token-history', element: <TokenHistory />
    }
  ]},
  {path: '/login', element: <Login />}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
