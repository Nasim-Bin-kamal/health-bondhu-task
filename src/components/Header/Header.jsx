import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import styles from './Header.module.css';
import logo from '../../images/logo.png';




const pages = [
    {
        pageTitle: "Home",
        pageLink: "/home"
    },
    {
        pageTitle: "About",
        pageLink: "/about"
    },
    {
        pageTitle: "Departments",
        pageLink: "/departments"
    },
    {
        pageTitle: "Pages",
        pageLink: "/pages"
    },
    {
        pageTitle: "Blog",
        pageLink: "/blog"
    },
    {
        pageTitle: "Contacts",
        pageLink: "/contacts"
    }
];


const Header = () => {

    return (
        <Navbar collapseOnSelect className={`${styles.navbarBg}`} bg="" variant="dark" sticky="top" expand="lg" >
            <Container>
                <Navbar.Brand className={`me-3 ${styles.navBrand}`}>
                    <Nav.Link to="/home">
                        <img className="img-fluid" src={logo} alt="" />
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#dae2e273' }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {
                            pages?.map((page, p_id) => (
                                <Nav.Link key={p_id} className={`mx-2 text-decoration-none text-white ${styles.navLinks} `} to={page?.pageLink}>{page?.pageTitle}</Nav.Link>
                            ))
                        }



                    </Nav>
                    <Nav>
                        <Button className={styles.button}>Free Consultation</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;