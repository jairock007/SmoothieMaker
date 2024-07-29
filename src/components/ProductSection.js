import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductSection = () => {
  return (
    <div className="hero-section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="slide-in-left">
            <h1 className="mb-4 display-4">EcoBlend Smoothie Maker</h1>
            <p className="lead mb-4">
              Create delicious, healthy smoothies with our eco-friendly and powerful blender.
            </p>
            <Button variant="success" size="lg" className="btn-buy-now">
              Buy Now - $99.99
            </Button>
          </Col>
          <Col md={6} className="slide-in-right">
            <img
              src="/images/product.avif"
              alt="EcoBlend Smoothie Maker"
              className="img-fluid rounded shadow hover-effect"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSection;