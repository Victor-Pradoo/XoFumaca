import Card from "../../components/card";

import "./card_conquistas.css";

export default function CardConquistas({ time }) {
  return (
    <Card id="conquistas-main">
      <div>Conquistas</div>
      <ConquistasDisplay {...time} />
    </Card>
  );
}

function ConquistasDisplay() {
  return (
    <div className="conquistas-display">
      <div className="conquistas-display-element">
        <div className="conquistas-display-element-label">Sequencia Max.</div>
        <div className="conquistas-display-element-value">14 dias</div>
      </div>
      <div className="conquistas-display-element">
        <div className="conquistas-display-element-label">Tragadas a menos</div>
        <div className="conquistas-display-element-value">27</div>
      </div>
      <div className="conquistas-display-element">
        <div className="conquistas-display-element-label">
          Dinheiro economizado
        </div>
        <div className="conquistas-display-element-value">R$ 44,50</div>
      </div>
      <div className="conquistas-display-element">
        <div className="conquistas-display-element-label">Metas alcançadas</div>
        <div className="conquistas-display-element-value">8</div>
      </div>
    </div>
  );
}
