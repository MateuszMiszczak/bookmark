import { useState } from 'react';

import { motion } from 'framer-motion';

import arrow from '../../../../assets/icon-arrow.svg';

import './Faq.scss';

const faqData = [
  {
    id: 0,
    header: 'What is Bookmark?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis accusamus numquam atque ullam? Assumenda exercitationem nostrum doloremque corporis natus atque ipsam architecto, harum dolores quam dicta ea magnam repudiandae modi perspiciatis dignissimos deserunt hic voluptates esse maiores. Optio ipsa aliquam nemo eius aliquid quisquam harum, nihil temporibus ea repellat aut.',
    icon: arrow,
  },
  {
    id: 1,
    header: 'How can I request a new browser?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis accusamus numquam atque ullam? Assumenda exercitationem nostrum doloremque corporis natus atque ipsam ',
    icon: arrow,
  },
  {
    id: 2,
    header: 'Is there a mobile app?',
    description:
      'oremque corporis natus atque ipsam architecto, harum dolores quam dicta ea magnam repudiandae modi perspiciatis dignissimos deserunt hic voluptates esse maiores. Optio ipsa aliquam nemo eius aliquid quisquam harum, nihil temporibus ea repellat aut.',
    icon: arrow,
  },
  {
    id: 3,
    header: 'What about other Chromium browsers?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis accusamus numquam atque ullam? Assumenda exeruptates esse maiores. Optio ipsa aliquam nemo eius aliquid quisquam harum, nihil temporibus ea repellat aut.',
    icon: arrow,
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [data, setData] = useState(faqData);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <motion.div
        whileInView={{ y: 0, scale: 1 }}
        initial={{ y: 200, scale: 0.4 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="faq__text"
      >
        <h2 className="faq__text__header">Frequently Asked Questions</h2>
        <p className="faq__text__description">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </motion.div>

      <motion.div
        whileInView={{ y: 0, scale: 1 }}
        initial={{ y: 200, scale: 0.4 }}
        transition={{ duration: 0.8, ease: 'backOut' }}
        className="faq__container"
      >
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`faq__container__content ${
              activeIndex === index ? 'active' : ''
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className="faq__container__content__question">
              <h3>{item.header}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke={activeIndex === index ? '#fa5757' : '#5267DF'}
                  strokeWidth="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </div>

            <div
              className={`faq__container__content__answer ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <p
                className={`faq__container__content__answer__p ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.button
        whileInView={{ y: 0, scale: 1 }}
        initial={{ y: 200, scale: 0.4 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="faq__button"
      >
        More info
      </motion.button>
    </section>
  );
};

export default Faq;
