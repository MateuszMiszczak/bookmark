import { useState } from 'react';

import { motion } from 'framer-motion';

import './DownloadsCard.scss';

import chrome from '../../../../assets/logo-chrome.svg';
import firefox from '../../../../assets/logo-firefox.svg';
import opera from '../../../../assets/logo-opera.svg';
import bgImg from '../../../../assets/bg-dots.svg';

const cardData = [
  {
    id: 0,
    imgBrowser: chrome,
    header: 'Add to Chrome',
    description: 'Minimum version 62',
    imgBg: bgImg,
    btnDesc: 'Add & Install Extension',
  },
  {
    id: 1,
    imgBrowser: firefox,
    header: 'Add to Firefox',
    description: 'Minimum version 55',
    imgBg: bgImg,
    btnDesc: 'Add & Install Extension',
  },
  {
    id: 2,
    imgBrowser: opera,
    header: 'Add to Opera',
    description: 'Minimum version 46',
    imgBg: bgImg,
    btnDesc: 'Add & Install Extension',
  },
];

const DownloadsCard = () => {
  const [data, setData] = useState(cardData);

  const card = data.map(
    ({ id, imgBrowser, header, description, imgBg, btnDesc }, i) => (
      <div key={id} className="card__inner">
        <div className="card__inner__top">
          <img
            src={imgBrowser}
            alt="Browser img"
            className="card__inner__top__img"
          />
          <div className="card__inner__top__text">
            <h3 className="card__inner__top__text__h3">{header}</h3>
            <p className="card__inner__top__text__p">{description}</p>
          </div>
        </div>

        <div className="card__inner__bottom">
          <img
            src={imgBg}
            alt="Bg dots img"
            className="card__inner__bottom__img"
          />
          <button className="card__inner__bottom__button">{btnDesc}</button>
        </div>
      </div>
    )
  );

  return (
    <motion.div
      whileInView={{ y: 0, scale: 1 }}
      initial={{ y: 50, scale: 0.4 }}
      transition={{ duration: 0.8, ease: 'backOut' }}
      className="card"
    >
      {card}
    </motion.div>
  );
};

export default DownloadsCard;
