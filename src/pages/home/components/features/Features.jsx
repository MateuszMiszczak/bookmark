import { motion } from 'framer-motion';

import FeatureCard from './FeatureCard';

import './Features.scss';

const Features = () => {
  return (
    <section className="features">
      <motion.div
        whileInView={{ y: 0, scale: 1 }}
        initial={{ y: 50, scale: 0.4 }}
        transition={{ duration: 0.4, ease: 'backOut' }}
        className="features__description"
      >
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </motion.div>
      <div className="features__cards">
        <FeatureCard />
      </div>
    </section>
  );
};

export default Features;
