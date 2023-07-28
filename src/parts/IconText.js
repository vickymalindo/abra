import { Col, Container, Navbar, Row } from 'react-bootstrap';
import logoAbra from '../assets/images/logoabra.png';

export default function IconText() {
  return (
    <div className='icon-text'>
      <Container content='fit'>
        <Row>
          <Navbar.Brand className='navbar-brand' href='/'>
            <Col className='d-flex align-items-center'>
              <img
                src={logoAbra}
                width='40'
                height='30'
                className='d-inline-block '
                alt='logo-abra'
              />
              <h6 className='ml-2 mb-0'>PT. Agung Berkah Rejeki Abadi</h6>
            </Col>
          </Navbar.Brand>
        </Row>
      </Container>
    </div>
  );
}
