import React from "react";
import "./TOP_PRICE.scss";
import { store } from "../../store/store";
import TOP_PRICE_CARD from "./TOP_PRICE_CARD";

const TOP_PRICE = () => {
  return (
    <section className="top-price">
      <div className="top-cards">
        {store.map((item) => {
          const { img, name, price, series } = item;
          return (
            <TOP_PRICE_CARD
              img={img}
              name={name}
              price={price}
              series={series}
              key={series}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TOP_PRICE;
