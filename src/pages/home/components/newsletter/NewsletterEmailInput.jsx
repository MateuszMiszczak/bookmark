import React, { useState } from 'react';
import './NewsletterEmailInput.scss';

import errorIcon from '../../../../assets/icon-error.svg';

const NewsletterEmailInput = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    const validationErrors = { ...errors };

    if (name === 'email' && !value.trim()) {
      validationErrors.email = 'Email field is empty';
    } else if (name === 'email' && !value.includes('@')) {
      validationErrors.email = `Whoops, make sure it's an email`;
    } else {
      delete validationErrors.email;
    }

    setErrors(validationErrors);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = 'Email field is empty';
    } else if (!formData.email.includes('@')) {
      validationErrors.email = `Whoops, make sure it's an email`;
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className={`form__container ${errors.email ? 'errorActive' : ''}`}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          autoComplete="off"
          onChange={handleChange}
          className="form__container__input"
        />
        {errors.email && (
          <div className="form__container__error">
            <span className="form__container__error__message">
              {errors.email}
            </span>
            <img
              src={errorIcon}
              alt="Error Icon"
              className="form__container__error__icon"
            />
          </div>
        )}
      </div>
      <button
        type="submit"
        className={`form__submit ${errors.email ? 'moveTop' : ''}`}
      >
        Contact Us
      </button>
    </form>
  );
};

export default NewsletterEmailInput;
