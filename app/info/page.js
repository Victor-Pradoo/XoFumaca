import NavBar from "../components/navbar";
import Header from "../components/header";
import PageTemplate from "../components/page_template";
import CardNoticia from "./components/card_noticia";

import "./page.css";

export default function InfoPage() {
  const noticias = [
    {
      img: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/08/1259090668-parar-de-fumar-naturalmente-1.jpg",
      title:
        "Entenda os perigos do tabagismo e diga sim para o combate ao fumo",
      href: "https://www.pfizer.com.br/noticias/ultimas-noticias/entenda-os-perigos-do-tabagismo",
    },
    {
      img: "https://www.clinicameitan.com.br/wp-content/uploads/parar-de-fumar-1514728203999_v2_1920x1275.jpg",
      title:
        "101 razões para parar de fumar cigarro e produtos de nicotina",
      href: "https://www.paho.org/pt/101-razoes-para-parar-fumar-0",
    },
    {
      img: "https://cdn.careplus.com.br/gerinstitucional/Src/Images/Post/00f0f675d9ffb9f62a1ff0fcbbc1799e7f2b31d4.jpg",
      title:
        "Pare de fumar: 21 passos para largar o cigarro",
      href: "https://drauziovarella.uol.com.br/drogas-licitas-e-ilicitas/tabagismo/pare-de-fumar-21-passos-para-largar-o-cigarro/",
    },
    {
      img: "https://www.amato.com.br/wp-content/uploads/2014/01/parar-de-fumar-cigarro-deixar-de-fumar-930x620.jpg",
      title:
        "Saiba quais são os malefícios provocados pelo cigarro ao corpo humano",
      href: "https://spdm.org.br/noticias/saude-e-bem-estar/saiba-quais-sao-os-maleficios-provocados-pelo-cigarro-ao-corpo-humano/",
    },
    {
      img: "https://www.bradescoseguros.com.br/wcm/connect/e85e91d5-18d1-42e4-ae51-8b35226e4665/11-dicas-parar-de-fumar-1400x650.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-e85e91d5-18d1-42e4-ae51-8b35226e4665-odBjESS",
      title:
        "Entenda os perigos do tabagismo e diga sim para o combate ao fumo",
      href: "https://www.pfizer.com.br/noticias/ultimas-noticias/entenda-os-perigos-do-tabagismo",
    },
    {
      img: "https://drogariasantoremedio.com.br/wp-content/uploads/2018/05/deixar-de-fumar.jpg",
      title:
        "101 razões para parar de fumar cigarro e produtos de nicotina",
      href: "https://www.paho.org/pt/101-razoes-para-parar-fumar-0",
    },
    {
      img: "https://media.unimedcampinas.com.br/f484b27a-7928-4b86-ae40-24531fe8928f",
      title:
        "Pare de fumar: 21 passos para largar o cigarro",
      href: "https://drauziovarella.uol.com.br/drogas-licitas-e-ilicitas/tabagismo/pare-de-fumar-21-passos-para-largar-o-cigarro/",
    },
    {
      img: "https://bhtorax.com.br/wp-content/uploads/elementor/thumbs/habbit-de-fumar-de-cigarros-scaled-qcbp0hbjgcgluotx2pd6dv4p6b6iv7yx5q910z6pag.jpg",
      title:
        "Saiba quais são os malefícios provocados pelo cigarro ao corpo humano",
      href: "https://spdm.org.br/noticias/saude-e-bem-estar/saiba-quais-sao-os-maleficios-provocados-pelo-cigarro-ao-corpo-humano/",
    },
  ];

  return (
    <>
      <Header title="Informações" />
      <NavBar />
      <PageTemplate>
        {/* Aqui fica o conteúdo da página */}
        {noticias.map((noticia, index) => (
          <CardNoticia key={index} {...noticia} />
        ))}
      </PageTemplate>
    </>
  );
}
