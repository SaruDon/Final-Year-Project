import React from 'react';
import { Link } from 'react-router-dom';
import HoverImage from 'react-hover-image/build';
import { store } from '../productsStore/Store';
import '../styles/BestSellers.css';

const BestSellerItem = ({ id, name, primaryImage, hoverImg, price }) => (
  <Link to={`/${id}`} key={id}>
    <div className="bestSellerIndivitualItem">
      <HoverImage
        src={primaryImage}
        hoverSrc={hoverImg}
        className="bestSellerImage rounded-xl mb-6"
      />
      <p className="bestSellerName text-center mb-2">{name}</p>
      <p className="font-normal text-center">₹{price}</p>
    </div>
  </Link>
);

const BestSellers = () => {
  return (
    <div className="bestSellerMainParent flex flex-row">
      {store
        .filter((item) => item.type === 'bestSeller')
        .map((item) => (
          <BestSellerItem {...item} />
        ))}
    </div>
  );
};

export default BestSellers;
