import { Component } from 'react';
import ContactUs from '../parts/ContactUs';
import FooterAbra from '../parts/FooterAbra';
import Header from '../parts/Header';
import OurClient from '../parts/OurPartners';
import OurTeam from '../parts/OurTeam';
import WhyChooseUs from '../parts/WhyChooseUs';

class MorePage extends Component {
  render() {
    return (
      <>
        <Header />
        <OurTeam />
        <WhyChooseUs />
        <OurClient />
        <ContactUs />
        <FooterAbra />
      </>
    );
  }
}
export default MorePage;
