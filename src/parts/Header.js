import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import IconText from './IconText';

export default function Header() {
  return (
    <Navbar bg='light' expand='lg' fixed='top'>
      <Container>
        <IconText />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link className='custom-link' href='/#about'>
              About
            </Nav.Link>
            <Nav.Link className='custom-link' href='/#portfolio'>
              Portfolio
            </Nav.Link>
            <NavDropdown
              className='nav-dropdown'
              title='More'
              id='basic-nav-dropdown'>
              <NavDropdown.Item className='custom-link' href='/more/#ourteam'>
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item className='custom-link' href='/more/#vision'>
                Our Values
              </NavDropdown.Item>
              <NavDropdown.Item
                className='custom-link'
                href='/more/#ourpartners'>
                Our Partners
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='custom-link' href='/more/#contactus'>
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
