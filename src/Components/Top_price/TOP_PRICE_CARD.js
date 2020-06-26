import React from 'react';
import './TOP_PRICE_CARD.scss';

const TOP_PRICE_CARD = ({ name, img, price, series}) => {
  return (
    <div className="top-price__card">
      <div className="top-price__card-img">
        <img src={img} alt={name} />
      </div>
      <div className="top-price__card-text">
       Кондиционер {name} серия {series}
      </div>
      <p className="top-price__card-price">{price} Грн</p>
      <div className="top-price__card--prices">Топ продаж</div>
    </div>
  )
}

export default TOP_PRICE_CARD
