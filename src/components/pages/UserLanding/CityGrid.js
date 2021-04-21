import React from 'react';
import CityCard from './CityCard';
import gridPic1 from '../../../assets/imgs/grid-pic1.jpg';
import gridPic2 from '../../../assets/imgs/grid-pic2.jpg';
import gridPic3 from '../../../assets/imgs/grid-pic3.jpg';
import gridPic4 from '../../../assets/imgs/grid-pic4.jpg';
import gridPic5 from '../../../assets/imgs/grid-pic5.jpg';
import gridPic6 from '../../../assets/imgs/grid-pic6.jpg';

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
