import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Main from "./components/main"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}
