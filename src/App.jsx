import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container from './components/container/Container';
import Navbar from './components/navbar/Navbar';

import Home from './pages/home/Home';
import Features from './pages/features/Features';
import Pricing from './pages/pricing/Pricing';
import Contact from './pages/contact/Contact';

import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default App;
