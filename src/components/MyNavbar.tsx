import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ArticleFetch from './ArticleFetch';

const MyNavbar = () => {
    return (
      <>
        <Navbar expand="lg" className="bg-dark">
          <Container>
            <Navbar.Brand className='fw-bold text-white' href="#home">NewsHub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-white">
                <Nav.Link className="text-white"   href="#home">Home</Nav.Link>
                <Nav.Link className="text-white"  href="#link">World</Nav.Link>
                <Nav.Link className="text-white"   href="#link">Politics</Nav.Link>
                <Nav.Link className="text-white"  href="#link">Sports</Nav.Link>
                <Nav.Link className="text-white"  href="#link">Business</Nav.Link>
                <Nav.Link className="text-white"   href="#link">Science & Technology</Nav.Link>
                <Nav.Link className="text-white"   href="#link">Fashion</Nav.Link>
                <Nav.Link className="text-white"   href="#link">Lifestyle</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <ArticleFetch />
      </>
    );
};

export default MyNavbar;
