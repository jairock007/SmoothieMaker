import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;