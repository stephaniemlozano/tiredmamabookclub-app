import { Navbar, Container, Nav } from 'react-bootstrap'

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
            <Nav.Link href="/books-reviews">books and reviews</Nav.Link>
            <Nav.Link href="/contact-us">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
