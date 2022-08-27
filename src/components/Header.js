import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar sticky='top' bg="light">
          <Container>
            <Navbar.Brand href='https://www.instagram.com/tiredmamabookclub/'>@tiredmamabookclub</Navbar.Brand>
          </Container>
      </Navbar>
      <Navbar sticky='top' bg="light">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">home</Nav.Link>
            <Nav.Link href="/about-us">about us</Nav.Link>
            <NavDropdown title="books and reviews" id="basic-nav-dropdown">
              <NavDropdown.Item href="/books">books</NavDropdown.Item>
              <NavDropdown.Item href="/reviews">reviews</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
