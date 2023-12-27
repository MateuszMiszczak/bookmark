import { motion } from 'framer-motion';

import DownloadsCard from './DownloadsCard';

import './Downloads.scss';

const Downloads = () => {
  return (
    <section className="downloads">
      <motion.div
        whileInView={{ y: 0, scale: 1 }}
        initial={{ y: 50, scale: 0.4 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="downloads__text"
      >
        <h2 className="downloads__text__h2">Download the extension</h2>
        <p className="downloads__text__p">
          We've got more browsers in the pipeline. Please do let us know of
          you've got a favourite you'd like us to prioritize
        </p>
      </motion.div>

      <DownloadsCard />
    </section>
  );
};

export default Downloads;
