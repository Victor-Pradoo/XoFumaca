import Card from "../../components/card";

import "./card_contador_tempo.css";

export default function CardContadorTempo({ time }) {
  return (
    <Card id="contador-tempo-main">
      <div>Tempo sem fumar</div>
      <TimeDisplay {...time} />
    </Card>
  );
}

function TimeDisplay({ days, hours, minutes, seconds }) {
  return (
    <div className="time-display">
      <div className="time-display-cell">{days}d</div>
      <div className="time-display-cell">{hours}h</div>
      <div className="time-display-cell">{minutes}m</div>
      <div className="time-display-cell">{seconds}s</div>
    </div>
  );
}
