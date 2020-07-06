import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header style={headerStyle}>          
            <nav>
                <h1>!PLAY</h1>
                <ul className='nav-links'>
                <Link to="/" style={linkStyle}>Home</Link> | <Link to='/games' style={linkStyle}>Games</Link> | <Link to='/about' style={linkStyle}>About</Link> | <Link to='/login' style={linkStyle}>Login</Link>
                </ul>
            </nav>
        </header>
    )

}

const linkStyle = {
    color: "#fff",
    textAlign: 'center',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;