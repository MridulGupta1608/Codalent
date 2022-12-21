import * as React from 'react';
import { Nav, NavbarContainer, NavLogo,NavLogin,SignUp, MobileIcon, NavMenu , NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';

function NavBar(){

    const [ham,setHam] = useState(true);
    const toggle = () => {
        setHam(!ham);
    }
    return (

        <>

        <Nav>
            <NavbarContainer>
                <NavLogo>
                    Pied Piper
                </NavLogo>
                <MobileIcon onClick={toggle}>
                        {ham ? <FaBars/> : <IoCloseSharp/>}
                </MobileIcon >
                <NavMenu>
                    <NavItem>
                        <NavLinks>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>
                            Products
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>
                            Pricing
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>
                            Blog
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavLogin>
                    <NavLinks>
                        Log in
                    </NavLinks>
                    <NavLinks>
                        <SignUp>
                            Sign Up
                        </SignUp>
                    </NavLinks>
                </NavLogin>

            </NavbarContainer>
        </Nav>
        </>
        
    )
}

export default NavBar;