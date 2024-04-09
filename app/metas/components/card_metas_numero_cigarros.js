import Card from "../../components/card";
import GridMetas from "./grid_metas"

import "./card_metas_numero_cigarros.css";

export default function CardMetasNumeroCigarros() {
  const metas = [
    {
      value: '1 Cigarro',
      title: 'Tudo começa em algum lugar',
      img: './badge1.png',
    },
    {
      value: '5 Cigarros',
      title: 'Parabens!',
      img: './badge1.png',
    },
    {
      value: '15 Cigarros',
      title: 'Quantos! Que orgulho :)',
      img: './badge1.png',
    },
    {
      value: '20 Cigarros',
      title: 'Sabia que ia conseguir!',
      img: './badge1.png',
    },
  ]

  return (
    <GridMetas title='Cigarros não fumados' metas={metas}/>
  );
}