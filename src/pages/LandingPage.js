import React, { Component } from 'react';
import AboutUs from '../parts/AboutUs';
import FooterAbra from '../parts/FooterAbra';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import OurServices from '../parts/OurServices';
import Portfolio from '../parts/Portfolio';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header />
        <Hero />
        <AboutUs />
        <OurServices />
        <Portfolio />
        <FooterAbra />
      </>
    );
  }
}
export default LandingPage;
