import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import logo from '../assets/images/logoabra.png';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pkd4nu9',
        'template_15z14eh',
        form.current,
        '05pKGEpkawh23WgwN'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Berhasil Kirim Pesan');
        },
        (error) => {
          alert('Gagal Kirim Pesan');
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id='contactus' className='bg-light'>
      <Container>
        <Row>
          <Col lg={6}>
            <Row>
              <Col>
                <Container className='header-section'>
                  <h1>CONTACT US</h1>
                  <h6>
                    Media and advertising company that helps you enlarge the
                    business
                  </h6>
                </Container>
              </Col>
            </Row>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group>
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your name'
                  name='user_name'
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Subject Email</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your subject email'
                  name='subject'
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  name='user_email'
                  required
                />
              </Form.Group>

              <Form.Group controlId='message'>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={5}
                  placeholder='Enter your message'
                  name='message'
                  required
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Send Message
              </Button>
            </Form>
          </Col>

          <Col>
            <Image src={logo} alt='logo abra contact us' fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
