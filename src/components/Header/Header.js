import React, {useContext} from 'react';
import {Container, Navbar, Nav, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {userContext} from "../../App";
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <Container className="fixed-top bg-light shadow-sm py-1 rounded">
            <Navbar expand="lg">
                <Link to="/"><Navbar.Brand href="#home" className="logo">Novoair</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-5">
                        <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                        <Link to="/coming"><Nav.Link href="#link">About</Nav.Link></Link>
                        <Link to="/coming"><Nav.Link href="#link">Contact</Nav.Link></Link>
                    </Nav>
                    <Nav.Link href="#link" className="text-secondary"> {loggedInUser.name || loggedInUser.displayName}</Nav.Link>
                    {
                        !loggedInUser.displayName  ? (  <Link to="/login"><Button variant="success">Login</Button></Link>)
                            : (  <Button onClick={() => setLoggedInUser({})} variant="danger">SignOut</Button>)
                    }
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;