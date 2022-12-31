import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import logo from  '../assets/logo.png'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent"  variant="transparent">
      
        <Navbar.Brand href="#home" className='logo ms-5'> <img src={logo} alt=""/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="ms-auto ">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#pricing">Programs</Nav.Link>
            <Nav.Link href="#Why">Why US</Nav.Link>
            <Nav.Link href="#Programing">Plans</Nav.Link>
            <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
           
          </Nav>
          <Nav>
            <button className='me-5 p-2'>Join us</button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;