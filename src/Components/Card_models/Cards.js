import React from "react";
import Card from './Card';
import card_gree_bg from '../../img/card-model/gree-card.jpg';
import card_gree_svg from '../../img/card-model/gree.png';
import card_tcl_bg from '../../img/card-model/tcl-card.jpg';
import card_tcl_svg from '../../img/card-model/tcl.png';
import card_ch_bg from '../../img/card-model/ch-card.jpg';
import card_ch_svg from '../../img/card-model/ch.png';
import card_aux_bg from '../../img/card-model/aux-card.jpg';
import card_aux_svg from '../../img/card-model/aux-svg.png';
import card_me_bg from '../../img/card-model/me-card.jpg';
import card_me_svg from '../../img/card-model/me.png';

import "./Cards.scss";

const Cards = () => {
  const cards = [
    { name: "Gree", img: card_gree_bg, description: '', svg: card_gree_svg },
    { name: "Cooper&Hunter", img: card_ch_bg, description: '', svg: card_ch_svg },
    { name: "TCL", img: card_tcl_bg, description: '', svg: card_tcl_svg },
    { name: "AUX", img: card_aux_bg, description: '', svg: card_aux_svg },
    { name: "MITSUBISHI Electric", img: card_me_bg, description: '', svg: card_me_svg },
  ];
  return (
    <section className="cards-model">
      {cards.map((item) => {
        const { name, img, description, svg } = item;

        return (
          <Card name={name} img={img} description={description} key={name} svg={svg} />
        )
      })}
    </section>
  );
};

export default Cards;
