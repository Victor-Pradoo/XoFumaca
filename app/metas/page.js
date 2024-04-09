import NavBar from "../components/navbar";
import Header from "../components/header";
import PageTemplate from "../components/page_template";

import CardMetasDias from "./components/card_metas_dias";
import CardMetasNumeroCigarros from "./components/card_metas_numero_cigarros";
import CardMetasDinheiroEconomizado from "./components/card_metas_dinheiro_economizado";

import "./page.css";

export default function BadgesPage() {
  return (
    <>
      <Header title="Metas" />
      <NavBar />
      <PageTemplate>
        <div id='badges-page-main'>
          <CardMetasDias/>
          <CardMetasNumeroCigarros/>
          <CardMetasDinheiroEconomizado/>
        </div>
      </PageTemplate>
    </>
  );
}
