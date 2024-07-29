import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <Container className="my-5 py-5" id="testimonials">
      <h2 className="text-center mb-5 fade-in">Customer Testimonials</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow testimonial-card">
            <Card.Body>
              <Card.Text>
                "The EcoBlend has changed my morning routine. It's so easy to use and clean!"
              </Card.Text>
              <Card.Footer className="text-muted">- Sarah J.</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow testimonial-card">
            <Card.Body>
              <Card.Text>
                "I love how eco-friendly this blender is. Great product, great company!"
              </Card.Text>
              <Card.Footer className="text-muted">- Mike T.</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow testimonial-card">
            <Card.Body>
              <Card.Text>
                "Powerful and efficient. My smoothies have never been better!"
              </Card.Text>
              <Card.Footer className="text-muted">- Emily R.</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;