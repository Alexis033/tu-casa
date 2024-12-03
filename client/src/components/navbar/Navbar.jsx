import { useState } from 'react'
import "./navbar.scss"
function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <div className="left">
                <a href="" className="logo">
                    <img src="/logo.png" alt="logo" />
                    <span>YourHome</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Sign in</a>
                <a href="/" className="register">Sign up</a>
                <div className="menuIcon">
                    <img src="/menu.png" 
                    alt="menu icon"
                    onClick={() => setOpen((prev)=> !prev)} 
                    />
                </div>

                <div className={open ? "menu active" : "menu"}>
                    <a href="/" tabIndex="-1">Home</a>
                    <a href="/" tabIndex="-1">About</a>
                    <a href="/" tabIndex="-1">Contact</a>
                    <a href="/" tabIndex="-1">Agents</a>
                    <a href="/" tabIndex="-1">Sign in</a>
                    <a href="/" tabIndex="-1">Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar