import { Link } from "gatsby";
import * as React from "react";
import "./navbar-component.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
const navList = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Products",
        path: "/products",
    },
];


function NavbarComponent(props) {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link className="nav-link text-light" to="/">VP STORE</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="myNavbar" />
                    <Navbar.Collapse id="myNavbar">
                        <Nav className="me-auto">
                            {navList.map((item,index) => {
                                return <Link key={index} activeClassName="active" className="nav-link" to={item.path}>{item.name}</Link>
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default NavbarComponent;
