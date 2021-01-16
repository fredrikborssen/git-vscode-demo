import React from 'react'

import {Nav,NavLink,Bars,NavMenu,NavBtn, NavBtnLink } from './NavBarElements.js'

const NavBar = () => {
    return (
        <>
        <Nav>
            <NavLink to='/'>
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/about' actionStyle>
                    About
                </NavLink>
                <NavLink to='/services' actionStyle>
                    Services
                </NavLink>
                <NavLink to='/Contact-us' actionStyle>
                    Contact us
                </NavLink>
                <NavLink to='/sign-up' actionStyle>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>  
    )
}

export default NavBar


