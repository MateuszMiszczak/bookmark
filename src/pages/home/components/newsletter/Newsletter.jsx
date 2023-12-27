import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import './Newsletter.scss';

import NewsletterEmailInput from './NewsletterEmailInput';

const Newsletter = () => {
  const [number, setNumber] = useState(35000);

  useEffect(() => {
    const durationInSeconds = 20;
    const framesPerSecond = 5.25;
    const frames = durationInSeconds * framesPerSecond;

    const stepValue = number / frames;

    const decreaseStep = () => {
      setNumber(prevNumber => Math.max(prevNumber - stepValue, 0));
    };

    const animate = () => {
      if (number > 0) {
        decreaseStep();
        animation = requestAnimationFrame(animate);
      }
    };

    let animation = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animation);
  }, [number]);

  let numberWidth =
    number < 10000
      ? number < 1000
        ? number < 100
          ? number < 10
            ? 'w0'
            : 'w10'
          : 'w20'
        : 'w30'
      : 'w40';

  return (
    <section className="newsletter">
      <motion.div
        whileInView={{ y: 0, scale: 1 }}
        initial={{ y: 50, scale: 0.4 }}
        transition={{ duration: 0.8, ease: 'backOut' }}
        className="newsletter__container"
      >
        <div className="newsletter__container__text">
          <div className="newsletter__container__text__first">
            <span
              className={`newsletter__container__text__first__numbers ${numberWidth}`}
            >
              <span>{Math.round(number)}</span>
            </span>
            <span className="newsletter__container__text__first__joined">
              + Already joined
            </span>
          </div>
          <h2 className="newsletter__container__text__header">
            Stay up-to-date with what we're doing
          </h2>
        </div>

        <NewsletterEmailInput />
      </motion.div>
    </section>
  );
};

export default Newsletter;
