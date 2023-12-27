import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import './FeatureCard.scss';

import illustration1 from '../../../../assets/illustration-features-tab-1.svg';
import illustration2 from '../../../../assets/illustration-features-tab-2.svg';
import illustration3 from '../../../../assets/illustration-features-tab-3.svg';

import Modal from '../../../../components/modal/Modal';

const tabData = [
  {
    id: 1,
    buttonLabel: 'Simple Bookmarking',
    image1: illustration1,
    image1Alt: 'Illustaration 1',
    header: 'Bookmark in one click',
    description:
      'Organize your bookmarks hovever you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    buttonDescriptionContent: 'More info',
  },
  {
    id: 2,
    buttonLabel: 'Speedy Searching',
    image1: illustration2,
    image1Alt: 'Illustaration 2',
    header: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    buttonDescriptionContent: 'More info',
  },
  {
    id: 3,
    buttonLabel: 'Easy Sharing',
    image1: illustration3,
    image1Alt: 'Image 1',
    header: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    buttonDescriptionContent: 'More info',
  },
];

const FeatureCard = () => {
  const [toggleState, setToggleState] = useState(1);
  const [activeTabId, setActiveTabId] = useState(null);

  const toggleTab = id => {
    setToggleState(id);
  };

  const handleOpenModal = () => {
    setActiveTabId(toggleState);
  };

  const handleCloseModal = () => {
    setActiveTabId(null);
  };

  return (
    <div className="container">
      <motion.div
        whileInView={{ y: 0, scale: 1 }}
        initial={{ y: 200, scale: 0.4 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="container__tabs"
      >
        {tabData.map(tab => (
          <button
            key={tab.id}
            className={
              toggleState === tab.id
                ? 'container__tabs__tab container__tabs__active'
                : 'container__tabs__tab'
            }
            onClick={() => toggleTab(tab.id)}
          >
            <div>
              {tab.buttonLabel}
              <span className="container__tabs__active__border" />
            </div>
          </button>
        ))}
      </motion.div>

      <div className="container__content">
        {tabData.map(tab => (
          <div
            key={tab.id}
            className={
              toggleState === tab.id
                ? 'container__content__tab container__content__tab__active'
                : 'container__content__tab'
            }
          >
            <div className="container__content__tab__inner">
              <div className="container__content__tab__inner__image">
                <motion.img
                  whileInView={{ y: 0, scale: 1 }}
                  initial={{ y: 50, scale: 0.4 }}
                  transition={{ duration: 0.6, ease: 'backOut' }}
                  src={tab.image1}
                  alt={tab.image1Alt}
                />
              </div>
              <div className="container__content__tab__inner__bubble" />
              <motion.div
                whileInView={{ y: 0, scale: 1 }}
                initial={{ y: 50, scale: 0.4 }}
                transition={{ duration: 0.8, ease: 'backOut' }}
                className="container__content__tab__inner__text"
              >
                <h2>{tab.header}</h2>
                <p>{tab.description}</p>
                <button onClick={handleOpenModal}>
                  {tab.buttonDescriptionContent}
                </button>
                <AnimatePresence>
                  {activeTabId === tab.id && (
                    <Modal onClose={handleCloseModal}>
                      <div className="modal__content__children__img">
                        <img src={tab.image1} alt={tab.image1Alt} />
                      </div>
                      <div className="modal__content__children__bubble" />
                      <div className="modal__content__children__text">
                        <h2>{tab.header}</h2>
                        <p>{tab.description}</p>
                      </div>
                    </Modal>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
