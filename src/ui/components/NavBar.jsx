import { Link, NavLink } from 'react-router-dom'
import React from 'react'

export const NavBar =   React.memo(() => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-black p-4">
            
    <Link 
        className="navbar-brand" 
        to="/"
    >
        <img src="/img/icon.webp" loading='lazy' alt="" />
    </Link>

    <div className="navbar-collapse">
        <div className="navbar-nav">

            

            <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({ color: isActive ? '#F3903E' : '' })}
                to="/start"
            >
                Inicio
            </NavLink>

            <NavLink 
                className={({ isActive }) => `nav-link ${ isActive ? 'active' : ''}`}
                style={({ isActive }) => ({ color: isActive ? '#F3903E' : '' })}
                to="/us"
            >
                Nosotros
            </NavLink>

            <NavLink 
                className={({ isActive }) => `nav-link ${ isActive ? 'active' : ''}`}
                style={({ isActive }) => ({ color: isActive ? '#F3903E' : '' })}
                to="/plans"
            >
                Planes
            </NavLink>

            <NavLink 
                className={({ isActive }) => `nav-link ${ isActive ? 'active' : ''}`}
                style={({ isActive }) => ({ color: isActive ? '#F3903E' : '' })}
                to="/contact"
            >
                Contacto
            </NavLink>
        </div>
    </div>

    
</nav>
)})
