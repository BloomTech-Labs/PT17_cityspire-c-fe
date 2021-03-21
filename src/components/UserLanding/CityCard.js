import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = props => {
  return (
    <>
      <div className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          <img src={props.src} alt={props.alt} className="cards-item-img" />
          <h3 className="cards-item-text">{props.text}</h3>
        </Link>
      </div>
    </>
  );
};

export default CityCard;
