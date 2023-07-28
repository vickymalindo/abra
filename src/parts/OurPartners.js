import { Card, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import logoPln from '.././assets/images/Logo/logopln.png';
import logoPerpamsi from '.././assets/images/Logo/perpamsi1.png';
import forkalim from './../assets/images/Logo/forkalim.png';
import pabsi from './../assets/images/Logo/pabsi.png';
import persi from './../assets/images/Logo/persi.png';
import tirtadharma from './../assets/images/Logo/tirtadharma.jpg';

const company = [
  {
    logo: logoPerpamsi,
    name: 'Perhimpunan Pekerja Air Minum dan Sanitasi Indonesia',
  },
  {
    logo: logoPln,
    name: 'Perusahaan Listrik Negara',
  },
  {
    logo: tirtadharma,
    name: 'Yayasan Pendidikan Tirta Dharma PAMSI',
  },
  {
    logo: forkalim,
    name: 'Forum Komunikasi Asosiasi PengelolaAir Limbah Domestik',
  },
  {
    logo: persi,
    name: 'Perhimpunan Rumah Sakit Seluruh Indonesia (PERSI) Wilayah Bali',
  },
  {
    logo: pabsi,
    name: 'Perkumpulan Angkat Besi Seluruh Indonesia (PABSI) Wilayah Jawa Timur',
  },
];

export default function OurClient() {
  return (
    <Container id='ourpartners'>
      <Row>
        <Container className='container'>
          <Row>
            <Col>
              <Container className='header-section'>
                <h1>OUR PARTNERS</h1>
                <h6>
                  Media and advertising company that helps you enlarge the
                  business
                </h6>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row md={1}>
        <Container className='container'>
          <Col className='col-ourclient'>
            <Container className='ourclient-abra'>
              <Carousel>
                {company.map((comp, index) => (
                  <Carousel.Item key={index}>
                    <Card>
                      <Image
                        src={comp.logo}
                        alt='image'
                        rounded
                        fluid
                        className='img-partners'
                        // style={{
                        //   maxWidth: '600px',
                        //   maxHeight: '400px',
                        //   width: 'auto',
                        //   height: '400px', // Allow the height to adjust based on the aspect ratio
                        //   objectFit: 'contain', //op or scale the image to fit within the specified dimensions
                        // }}
                      />
                      <Card.Body className='text-center'>
                        <Card.Title>{comp.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Container>
          </Col>
        </Container>
      </Row>
    </Container>
  );
}
