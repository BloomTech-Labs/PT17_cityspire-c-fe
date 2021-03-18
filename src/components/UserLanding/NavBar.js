import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { HomeOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

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
          <Link to="/" className="logo">
            CitySpire
            <HomeOutlined className="house-icon" />
          </Link>
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
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Saved Searches
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
          {button && <Button buttonStyle="btn-outline">Sign In/Up</Button>}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
