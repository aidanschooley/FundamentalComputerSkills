import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Desktop from './pages/Desktop.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Desktop</Link> |&nbsp;
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
