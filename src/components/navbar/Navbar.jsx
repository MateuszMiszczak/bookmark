import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SocialMedia from '../socialMedia/SocialMedia';

import logoDesktop from '../../assets/logo-bookmark.svg';
import logoMobile from '../../assets/logo-bookmark-mobile.svg';

import hamburger from '../../assets/icon-hamburger.svg';
import close from '../../assets/icon-close.svg';

import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen(p => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        {menuOpen ? (
          <Link to="/" className="header__content__logo z-index-high">
            <img src={logoMobile} alt="Logo" />
          </Link>
        ) : (
          <Link to="/" className="header__content__logo ">
            <img src={logoDesktop} alt="Logo" />
          </Link>
        )}
        <nav
          className={`header__content__nav ${
            menuOpen && size.width < 768 ? 'isActive' : ''
          }`}
        >
          <ul>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>

          {menuOpen && (
            <div style={{ position: 'absolute', bottom: '8%' }}>
              <SocialMedia />
            </div>
          )}
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <img src={hamburger} alt="Open" onClick={menuToggleHandler} />
          ) : (
            <img src={close} alt="Close" onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
