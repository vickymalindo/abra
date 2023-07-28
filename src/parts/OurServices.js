import { Col, Container, Image, Row } from 'react-bootstrap';
import logoAdvertising from '.././assets/images/Logo/advertising.png';
import logoEventOrganising from '.././assets/images/Logo/eventorganising.png';
import logoPrinting from '.././assets/images/Logo/printing.png';
import logoPublishing from '.././assets/images/Logo/publishing.png';

const services = [
  {
    title: 'Advertising',
    description: 'Customized and give advertising materials for organizations',
    icon: logoAdvertising,
  },
  {
    title: 'Publishing',
    description: 'Creating compelling company profiles for Organiztions',
    icon: logoPublishing,
  },
  {
    title: 'Event Oranizing',
    description: 'Designing and publishing directories for Organizations',
    icon: logoEventOrganising,
  },
  {
    title: 'Printing',
    description: 'Developing and organize event calendars for organizations',
    icon: logoPrinting,
  },
];

export default function OurServices() {
  return (
    <div id='services'>
      <link
        href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
        rel='stylesheet'
      />
      <div className='section services-section' id='services'>
        <div className='container'>
          <Row>
            <Col>
              <Container className='header-section'>
                <h1>OUR SERVICES</h1>
                <h6>
                  Media and advertising company that helps you enlarge the
                  business
                </h6>
              </Container>
            </Col>
          </Row>
        </div>
        <div className='row px-3 py-4'>
          {services.map((service, index) => (
            <div className='col-sm-6 col-lg-4' key={index}>
              <div className='feature-box-1'>
                <div className='icon'>
                  <Image src={service.icon} alt='icon services' fluid></Image>
                </div>
                <div className='feature-content'>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
