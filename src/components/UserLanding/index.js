import React from 'react';
import CityGrid from './CityGrid';
import Footer from './Footer';
import NavBar from './NavBar';
import SearchSection from './SearchSection';

const UserLanding = () => {
  return (
    <>
      <NavBar />
      <SearchSection />
      <CityGrid />
      <Footer />
    </>
  );
};

export default UserLanding;
