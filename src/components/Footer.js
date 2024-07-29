import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="fade-in">
            <p>&copy; 2024 EcoBlend. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end fade-in">
            <p>
              <a href="#" className="text-muted me-2 footer-link">Privacy Policy</a>
              <a href="#" className="text-muted me-2 footer-link">Terms of Service</a>
              <a href="#" className="text-muted footer-link">Contact Us</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;