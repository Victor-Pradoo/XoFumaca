import Card from "../../components/card";
import { BsArrowClockwise } from "react-icons/bs";

import "./card_reiniciar_contador.css";

export default function CardReiniciarContador({ time }) {
  return (
    <Card>
      <div>Reiniciar contador</div>
      <div className="restart-streak-button-div">
        <button className="restart-streak-button">
          <BsArrowClockwise className="restart-streak-icon" />
        </button>
      </div>
    </Card>
  );
}
