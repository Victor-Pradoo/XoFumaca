import NavBar from "../components/navbar";
import Header from "../components/header";
import PageTemplate from "../components/page_template";

import "./page.css";

export default function BadgesPage() {
  return (
    <>
      <Header title="Metas" />
      <NavBar />
      <PageTemplate>{/* Aqui fica o conteúdo da página */}</PageTemplate>
    </>
  );
}
