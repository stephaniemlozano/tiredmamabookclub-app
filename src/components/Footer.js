import { Navbar, Nav, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <img src="https://media2.giphy.com/media/Y2bM68y94nxSXYkCaI/giphy.gif?cid=6c09b95268d1675fd0a872b7793ec6657d9413930234afff&rid=giphy.gif&ct=s" alt="read more books" width={150} />
      <Navbar sticky='bottom' bg='light'>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link href='/'>home</Nav.Link>
            <Nav.Link href='/about-us'>about us</Nav.Link>
            <Nav.Link href='/books-reviews'>books and reviews</Nav.Link>
            {/* <Nav.Link href='/admin'>admin</Nav.Link> */}
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
