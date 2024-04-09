import Card from "../../components/card";
import ProgressBar from "../../components/progress_bar";

import "./card_proxima_meta.css";

export default function CardProximaMeta({ time }) {
  return (
    <Card id="progresso-main-main">
      <div>Próxima meta</div>
      <div className="progresso-meta-title">10 dias!</div>
      <ProgressoMeta {...time} />
    </Card>
  );
}

function ProgressoMeta({ days, hours, minutes }) {
  let time = days + hours / 24 + minutes / (24 * 60);

  return <ProgressBar value={time} total={10} />;
}
