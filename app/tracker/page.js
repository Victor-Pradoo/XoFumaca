import NavBar from "../components/navbar";
import Header from "../components/header";
import PageTemplate from "../components/page_template";
import CardContadorTempo from "./components/card_contador_tempo";
import CardProximaMeta from "./components/card_proxima_meta";
import CardConquistas from "./components/card_conquistas";
import CardReiniciarContador from "./components/card_reiniciar_contador";

import "./page.css";

export default function TrackerPage() {
  const time = {
    days: 7,
    hours: 23,
    minutes: 11,
    seconds: 25,
  };

  return (
    <>
      <Header title="Tracker" />
      <NavBar />
      <PageTemplate>
        {/* Aqui fica o conteúdo da página */}
        <CardContadorTempo time={time} />
        <CardProximaMeta time={time} />
        <CardConquistas time={time} />
        <CardReiniciarContador time={time} />
      </PageTemplate>
    </>
  );
}
