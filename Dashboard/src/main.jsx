import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./components/Home.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>,
)
