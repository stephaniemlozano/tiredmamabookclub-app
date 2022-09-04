import { Navbar, Nav, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Navbar sticky='bottom' bg='light'>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link href='/'>home</Nav.Link>
            <Nav.Link href='/about-us'>about us</Nav.Link>
            <Nav.Link href='/books-reviews'>books and reviews</Nav.Link>
            <Nav.Link href='/admin'>admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <footer>
        <small>Copyright © 2022 | All rights reserved</small>
      </footer>
    </div>
  )
}

export default Footer
