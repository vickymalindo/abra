import { useState } from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import perpamsi2016 from '.././assets/images/Content/Perpamsi 2016.jpg';
import perpamsi from '.././assets/images/Content/direktoriperpamsi.jpg';
import kiprahperpamsi from '.././assets/images/Content/kiprahperpamsi.jpg';
import limapuluhtahunperpamsi from '.././assets/images/Content/limapuluhtahunperpamsi.jpg';
import pabsi from '.././assets/images/Content/pabsi.jpg';
import { default as perpamsi1 } from '.././assets/images/Content/pamsi.jpg';
import pamsijawatimur from '.././assets/images/Content/pamsijawatimur.jpg';
import perpamsi2014 from '.././assets/images/Content/perpamsi2014.jpg';
import pln from '.././assets/images/Content/pln.jpg';
import ppamsi from '.././assets/images/Content/ppamsi.jpg';
import dpdperpamsijatim2000 from './../assets/images/Content/dpdperpamsijatim2000.jpeg';
import forkalim from './../assets/images/Content/forkalim.jpg';
import inkoppamsi from './../assets/images/Content/inkoppamsi2015.jpeg';
import persi from './../assets/images/Content/persi.jpeg';
import proposalperpamsi from './../assets/images/Content/proposalpamsi.jpeg';
import whitebackground from './../assets/images/whitebackground.jpg';

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const portfolio = [
    {
      image: perpamsi,
      name: 'Direktori PERPAMSI',
      description: 'Penerbitan Buku Direktori PERPAMSI 2016',
    },

    {
      image: perpamsi1,
      name: 'PERPAMSI',
      description:
        'Penerbitan Buku Kerja & Kalender Eksklusif Yayasan Pendidikan Tirta Dharma PAMSI 2022',
    },

    {
      image: kiprahperpamsi,
      name: 'Kiprah PERPAMSI',
      description:
        'Kiprah 15 Tahun Dalam Membangun SDM Profesional: Yayasan Pendidikan Tirta Dharma PAMSI',
    },

    {
      image: limapuluhtahunperpamsi,
      name: 'Lima Puluh Tahun PERPAMSI',
      description:
        'Selamat & Sukses 50 Tahun PERPAMSI: Membangun Air Minum Tanah Air',
    },

    {
      image: pabsi,
      name: 'PABSI',
      description:
        'Penerbitan Buku Profil 2023 “10 Tahun Membangun Perkumpulan Angkat Besi Seluruh Indonesia (PABSI) Wilayah Jawa Timur”',
    },

    {
      image: inkoppamsi,
      name: 'INKOP PAMSI',
      description: 'Penerbitan Buku Direktori INKOP PAMSI 2015',
    },

    {
      image: pamsijawatimur,
      name: 'PAMSI Jawa Timur',
      description: 'Penerbitan Buku Direktori PD PERPAMSI Jawa Timur 2020',
    },

    {
      image: perpamsi2016,
      name: 'PERPAMSI 2016',
      description: 'Penerbitan Buku Direktori PERPAMSI 2016',
    },

    {
      image: perpamsi2014,
      name: 'PERPAMSI 2014',
      description: 'Penerbitan Buku Direktori DPD PERPAMSI Jatim 2014',
    },

    {
      image: pln,
      name: 'PLN',
      description: 'Penerbitan Buku Sejarah 66 Tahun PLN',
    },

    {
      image: ppamsi,
      name: 'PERPAMSI 2019',
      description: 'Penerbitan Buku Kerja & Kalender PERPAMSI 2019',
    },

    {
      image: persi,
      name: 'PERSI',
      description:
        'Penerbitan Kerja Eksklusif & Kalender 2023 PERSI Wilayah Bali',
    },

    {
      image: forkalim,
      name: 'FORKALIM',
      description:
        'Penerbitan Buku Profil & Direktori Forum Komunikasi Asosiasi Pengelola Air Limbah Domestik (FORKALIM)',
    },

    {
      image: dpdperpamsijatim2000,
      name: 'DPD Perpamsi',
      description: 'Penerbitan Buku Direktori DPD PERPAMSI Jatim 2020',
    },

    {
      image: proposalperpamsi,
      name: 'Yayasan Pendidikan Tirta Dharma ',
      description:
        'Penerbitan Buku Agenda Kerja Eksklusif Yayasan Pendidikan Tirta Dharma PAMSI 2023 blm',
    },
  ];
  return (
    <Container id='portfolio' className='portfolio' fluid>
      <Row>
        <Col>
          <Container className='header-section'>
            <h1>OUR PORTFOLIO</h1>
            <h6>
              Media and advertising company that helps you enlarge the business
            </h6>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className='custome-col'>
          <Carousel
            className='carousel slide'
            activeIndex={index}
            onSelect={handleSelect}
            fade>
            {/* <Carousel.Item className="carousel-item">
              <Image className="d-block w-100 image-view " src="https://source.unsplash.com/1200x800/?work" alt="First slide" fluid />
              <Carousel.Caption>
                <h3>
                  <ReactTypingEffect speed={100} eraseSpeed={0} text={["Lets see our portfolio"]} />
                </h3>
                <p>Swipe</p>
              </Carousel.Caption>
            </Carousel.Item> */}

            {portfolio.map((ports, index) => (
              <Carousel.Item className='carousel-item' key={index}>
                <Image
                  className='d-block w-100 image-view'
                  src={whitebackground}
                  alt='First slide'
                  fluid
                />
                <Carousel.Caption>
                  <Image
                    src={ports.image}
                    height={300}
                    width={200}
                    className='mb-2'></Image>
                  <h5>{ports.name}</h5>
                  <h6>{ports.description}</h6>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
