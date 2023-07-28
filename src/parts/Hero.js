import { useState } from 'react';
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';

export default function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className='hero'>
      <Row className='h-100'>
        <Col className='custome-col'>
          <Carousel
            className='carousel slide'
            activeIndex={index}
            onSelect={handleSelect}
            fade>
            <Carousel.Item className='carousel-item'>
              <Image
                className='d-block w-100 image-view'
                src='https://source.unsplash.com/1200x800/?work'
                alt='First slide'
                fluid
              />
              <Carousel.Caption>
                <h3 className='fs-1'>
                  <ReactTypingEffect
                    speed={100}
                    eraseSpeed={0}
                    text={['WELCOME TO ABRA']}
                  />
                </h3>
                <p className='fs-5'>
                  Media and advertising company that helps you enlarge the
                  business.
                </p>
                <Button variant='secondary' href='/#about'>
                  ABOUT US
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className='d-block w-100 image-view'
                src='https://source.unsplash.com/1200x800/?work'
                alt='Second slide'
                fluid
              />
              <Carousel.Caption>
                <h3 className='fs-1'>OUR SERVICES</h3>
                <p className='fs-5'>ABRA services for customers</p>
                <Button variant='secondary' href='/#services'>
                  More about our services
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className='d-block w-100 image-view'
                src='https://source.unsplash.com/1200x800/?work'
                alt='Third slide'
                fluid
              />
              <Carousel.Caption>
                <h3 className='fs-1'>OUR PARTNERS</h3>
                <p className='fs-5'>ABRA PARTNERS</p>
                <Button variant='secondary' href='/more/#ourpartners'>
                  OUR PARTNERS
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
