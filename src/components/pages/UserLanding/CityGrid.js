import React from 'react';
import CityCard from './CityCard';

const gridPic1 = require('../../../assets/imgs/grid-pic1.jpg');
const gridPic2 = require('../../../assets/imgs/grid-pic2.jpg');
const gridPic3 = require('../../../assets/imgs/grid-pic3.jpg');
const gridPic4 = require('../../../assets/imgs/grid-pic4.jpg');
const gridPic5 = require('../../../assets/imgs/grid-pic5.jpg');
const gridPic6 = require('../../../assets/imgs/grid-pic6.jpg');

const CityGrid = () => {
  return (
    <section className="city-grid-section">
      <h1>insights from cityspire</h1>
      <div className="cards-container">
        <CityCard
          src={gridPic1}
          alt="safe city"
          text="safest cities in america"
          path="/"
        />
        <CityCard
          src={gridPic2}
          alt="school building"
          text="america's best schools"
          path="/"
        />
        <CityCard
          src={gridPic3}
          alt="dangerous city"
          text="most dangerous"
          path="/"
        />
        <CityCard
          src={gridPic4}
          alt="crime scene tape"
          text="murder capitals of america"
          path="/"
        />
        <CityCard
          src={gridPic5}
          alt="family town"
          text="texas' 10 best towns to raise families in"
          path="/"
        />
        <CityCard
          src={gridPic6}
          alt="skyscrapers"
          text="highest appreciating cities"
          path="/"
        />
      </div>
    </section>
  );
};

export default CityGrid;
