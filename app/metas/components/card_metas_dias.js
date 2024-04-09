import Card from "../../components/card";
import GridMetas from "./grid_metas"

import "./card_metas_dias.css";

export default function CardMetasDias() {
    const metas = [
        {
          value: '1 Dia',
          title: 'Primeira vitória!',
          img: './badge3.png',
        },
        {
          value: '7 Dia',
          title: 'Uma semana limpo',
          img: './badge3.png',
        },
        {
          value: '15 Dia',
          title: 'Meio mês mais saudavel',
          img: './badge3.png',
        },
        {
          value: '30 dias',
          title: 'Um mês inteiro sem fumaça',
          img: './badge3.png',
        },
      ]

  return ( 
    <GridMetas title='Dias sem fumar' metas={metas}/>
  );
}