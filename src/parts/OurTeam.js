import { Col, Container, Row } from 'react-bootstrap';
import AgungDwiMarta from '../assets/images/People/People_1.jpg';
import Agung from '../assets/images/People/People_2.jpg';
import BenardineD from '../assets/images/People/People_3.jpg';
import ChandraSunaryo from '../assets/images/People/People_4.jpg';

const memberData = [
  {
    image: ChandraSunaryo,
    name: 'Chandra Sunaryo',
    position: 'Creative and Marketing Manager',
  },
  {
    image: AgungDwiMarta,
    name: 'Agung Dwi Martha',
    position: 'Project Manager',
  },
  {
    image: Agung,
    name: 'Agung',
    position: 'Operations Manager',
  },
  {
    image: BenardineD,
    name: 'Benardine D. P.',
    position: 'Director',
  },
];

export default function OurTeam() {
  return (
    <Container className='mb-5' fluid>
      <Row>
        <Row>
          <Col>
            <Container className='header-team'>
              <h1>OUR TEAM</h1>
              <h6>
                Media and advertising company that helps you enlarge the
                business
              </h6>
            </Container>
          </Col>
        </Row>
      </Row>
      <div className='d-flex flex-wrap justify-content-center align-items-center'>
        {memberData.map((card, idx) => (
          <div className='h-100 card card-width' key={idx}>
            <h3 className='text-center'>{card.name}</h3>
            {idx > 0 ? (
              <p className='text-center text-position'>{card.position}</p>
            ) : (
              <p className='text-center'>{card.position}</p>
            )}

            <div className='icons'>
              <a href='mailto:agungberkahrejekiabadi@gmail.com?subject=Partnership&x-scheme-handler=gmail'>
                <i className='fas fa-envelope'></i>
              </a>
              <a href='https://wa.me/0845354543'>
                <i className='fa fa-phone'></i>
              </a>
              <a href='https://www.linkedin.com/company/abra88/'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
