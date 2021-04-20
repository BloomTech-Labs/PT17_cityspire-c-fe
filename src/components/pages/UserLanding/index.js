import React from 'react';
import CityGrid from './CityGrid';
import ULFooter from './ULFooter';
import NavBar from './NavBar';
import SearchSection from './SearchSection';

const UserLanding = () => {
  return (
    <>
      <NavBar />
      <SearchSection />
      <CityGrid />
      <ULFooter />
    </>
  );
};

export default UserLanding;
