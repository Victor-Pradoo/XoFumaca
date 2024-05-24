import Card from "../../components/card";

import "./card_noticia.css";

export default function CardNoticia({ img, href, title }) {
  
  
  return (
    <Card className="noticia-main" href={href}>
      <img className="noticia-img" src={img} />
      <div className="noticia-content">{title}</div>
    </Card>
  );
}

// import Card from "../../components/card";
// import { BsArrowClockwise } from "react-icons/bs";

// import "./card_reiniciar_contador.css";

// export default function CardReiniciarContador({ time }) {
//   return (
//     <Card>
//       <div>Reiniciar contador</div>
//       <div className="restart-streak-button-div">
//         <button className="restart-streak-button">
//           <BsArrowClockwise className="restart-streak-icon" />
//         </button>
//       </div>
//     </Card>
//   );
// }
