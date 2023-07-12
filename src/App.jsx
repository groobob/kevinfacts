import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Gallery from './components/Gallery'

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Gallery />
        </div>
    )
}
