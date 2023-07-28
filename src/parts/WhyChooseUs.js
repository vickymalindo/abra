import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const cardData = [
  {
    title: 'VISION',
    text: 'Menjadi perusahaan media advertisement yang profesional dan siap melayani negara dan masyarakat dengan mengutamakan hasil dan kualitas.',
    imageSrc: '',
  },
  {
    title: 'MISION',
    text: 'Menyediakan layanan, produk, dan solusi sesuai kebutuhan konsumen.',
    imageSrc: '',
  },
  {
    title: 'CULTURE',
    text: 'ABRA memiliki sikap inovatif dan menjunjung tinggi integritas, teamwork, dan keterbukaan.',
    imageSrc: '',
  },
];

export default function WhyChooseUs() {
  return (
    <Container id='vision' className='ourvalues mb-5' fluid>
      <Row>
        <Col>
          <Container className='header-section'>
            <h1>OUR VALUES</h1>
            <h6>
              Media and advertising company that helps you enlarge the business
            </h6>
          </Container>
        </Col>
      </Row>
      <Container className='choose-us'>
        <Container className='card-chooseus'>
          <Row xs={1} md={3} className='g-4'>
            {cardData.map((card, idx) => (
              <Col key={idx} className='p-0'>
                <Card className='card-fixed-height'>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
