import { useState, useEffect, useCallback } from 'react';

import Downloads from './components/downloads/Downloads';
import Faq from './components/faq/Faq';
import Features from './components/features/Features';
import Hero from './components/hero/Hero';
import Newsletter from './components/newsletter/Newsletter';
import Modal from '../../components/modal/Modal';
import illustration2 from '../../assets/illustration-features-tab-2.svg';
import { AnimatePresence } from 'framer-motion';

const data = {
  buttonLabel: 'Speedy Searching',
  image1: illustration2,
  image1Alt: 'Illustaration 2',
  header: 'Intelligent search',
  description:
    'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  buttonDescriptionContent: 'More info',
};

const Home = () => {
  const [modalData] = useState(data);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasModalBeenShown = sessionStorage.getItem('hasModalBeenShown');

    if (!hasModalBeenShown) {
      const timeoutId = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem('hasModalBeenShown', 'true');
      }, 30000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    sessionStorage.removeItem('hasModalBeenShown');
  };

  const handleMouseMove = useCallback(
    e => {
      if (e.clientY < 10) {
        setShowModal(true);
        sessionStorage.setItem('hasModalBeenShown', 'true');
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div>
      <Hero />
      <Features />
      <Downloads />
      <Faq />
      <Newsletter />
      <AnimatePresence>
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <div className="modal__content__children__img">
              <img src={modalData.image1} alt={modalData.image1Alt} />
            </div>
            <div className="modal__content__children__bubble" />
            <div className="modal__content__children__text">
              <h2>{modalData.header}</h2>
              <p>{modalData.description}</p>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
