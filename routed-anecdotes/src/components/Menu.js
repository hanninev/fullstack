import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Menu = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Anecdote app</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem href="/">
                        Anecdotes
      </NavItem>
                    <NavItem href="/create">
                        Create
      </NavItem>
                    <NavItem href="/about">
                        About
      </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    )
}

export default Menu