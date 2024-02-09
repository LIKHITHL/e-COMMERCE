import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div>
      {/* Navbar One */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
            <Nav className="justify-content-center" activeKey="/home">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon className="cart" icon={faCartShopping} />
                </Nav.Link>
              </Nav.Item>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar two */}
      <>
        <Nav className="justify-content-center bg-light" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/" className='text-secondary'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" className='text-secondary'>All Products</Nav.Link>
          </Nav.Item>
          <NavDropdown title={<span className="text-secondary">Women</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="/">All Products</NavDropdown.Item>
            <NavDropdown.Item href="/">Shirts</NavDropdown.Item>
            <NavDropdown.Item href="/">Hoodies</NavDropdown.Item>
            <NavDropdown.Item href="/">Pants</NavDropdown.Item>
            <NavDropdown.Item href="/">Foot Wear</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<span className="text-secondary">Men</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="/">All Products</NavDropdown.Item>
            <NavDropdown.Item href="/">Dresses</NavDropdown.Item>
            <NavDropdown.Item href="/">Kurtas</NavDropdown.Item>
            <NavDropdown.Item href="/">Pants</NavDropdown.Item>
            <NavDropdown.Item href="/">Skirts</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link href="/" className='text-secondary'>Kids</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" className='text-secondary'>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    </div>
  )
}

export default Header