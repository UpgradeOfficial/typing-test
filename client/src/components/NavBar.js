import { React, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {
            name: "home",
            path : "/"
        },
        {
            name: "create",
            path : "/create"
        },
        {
            name: "login",
            path : "/login"
        },
        {
            name: "register",
            path : "/register"
        },
        {
            name: "logout",
            path : "/logout"
        }
    ]
  return (
    <div >
        <Navbar color="light" light >
            <NavbarBrand href="/">LOGG</NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                {links.map(link=>(
                            
                    <NavItem key={link.name}>
                        <NavLink href={link.path} to={link.path}>{link.name}</NavLink>
                    </NavItem>
                            
                        ))}
                    
                    
                </Nav>
            </Collapse>
        </Navbar>
    </div >
  );
};

export default NavBar;
