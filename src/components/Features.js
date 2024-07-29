import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBolt, FaLeaf, FaCog } from 'react-icons/fa';

const Features = () => {
  return (
    <Container className="my-5 py-5" id="features">
      <h2 className="text-center mb-5 fade-in">Features</h2>
      <Row>
        <Col md={4} className="mb-4 slide-in-left">
          <div className="text-center hover-effect">
            <FaBolt className="feature-icon" />
            <h4>Powerful Motor</h4>
            <p>1000W motor for smooth blending every time.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4 fade-in">
          <div className="text-center hover-effect">
            <FaLeaf className="feature-icon" />
            <h4>Eco-Friendly Materials</h4>
            <p>Made from recycled and sustainable materials.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4 slide-in-right">
          <div className="text-center hover-effect">
            <FaCog className="feature-icon" />
            <h4>Multiple Speed Settings</h4>
            <p>Customize your blend with various speed options.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;