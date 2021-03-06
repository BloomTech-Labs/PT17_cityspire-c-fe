import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ULButton } from './ULButton';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import logoImg from '../../../assets/imgs/city-outline.svg';

import './UserLanding.css';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-pic"></div>
          <Link to="/" className="logo">
            CitySpire
          </Link>
          <img src={logoImg} alt="city outline" className="logo-img" />
          <div className="menu-icon" onClick={() => setClick(!click)}>
            {click ? (
              <CloseOutlined className="mobile-icon" />
            ) : (
              <MenuOutlined className="mobile-icon" />
            )}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={() => setClick(false)}
              >
                Sign In/Up
              </Link>
            </li>
          </ul>
          {button && <ULButton buttonStyle="btn-outline">Sign In/Up</ULButton>}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
