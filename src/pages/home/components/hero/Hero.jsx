import { motion } from 'framer-motion';

import './Hero.scss';

import heroLogo from '../../../../assets/illustration-hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        whileInView={{ y: 0, scale: 1 }}
        initial={{ y: 50, scale: 0.4 }}
        transition={{ duration: 0.4, ease: 'backOut' }}
        className="hero__info"
      >
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero__info__buttons">
          <button className="hero__info__buttons__1">Get it on Chrome</button>
          <button className="hero__info__buttons__2">Get it on Firefox</button>
        </div>
      </motion.div>

      <div className="hero__image">
        <motion.img
          whileInView={{ y: 0, scale: 1 }}
          initial={{ y: 50, scale: 0.4 }}
          transition={{ duration: 0.8, ease: 'backOut' }}
          src={heroLogo}
          alt="hero logo"
          className="hero__image__img"
        />
        <div className="hero__image__bubble" />
      </div>
    </section>
  );
};

export default Hero;
