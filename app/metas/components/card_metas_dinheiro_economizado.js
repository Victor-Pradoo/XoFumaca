import Card from "../../components/card";
import GridMetas from "./grid_metas"

import "./card_metas_dinheiro_economizado.css";

export default function CardMetasDinheiroEconomizado() {
  const metas = [
    {
      value: 'R$ 5,00',
      title: 'Tome um sorvete!',
      img: './badge2.png',
    },
    {
      value: 'R$ 15,00',
      title: 'É bom economizar né?',
      img: './badge2.png',
    },
    {
      value: 'R$ 30,00',
      title: 'Vale um hamburguer',
      img: './badge2.png',
    },
    {
      value: 'R$ 50,00',
      title: 'Quanto dinheiro!',
      img: './badge2.png',
    },
  ]

  return (
    <GridMetas title='Dinheiro Economizado' metas={metas}/>
  );
}