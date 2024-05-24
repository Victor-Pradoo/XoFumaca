// Igor Soler RA: 10381736
//Victor Prado Chaves: 10375841
"use client"


import NavBar from "../components/navbar";
import Header from "../components/header";
import PageTemplate from "../components/page_template";
import CardNoticia from "./components/card_noticia";
import { useEffect, useState } from "react"


import "./page.css";


export default function InfoPage() {

  function getData(){


    fetch('https://newsapi.org/v2/everything?q=cigarro&apiKey=86ce4e05338145d59049c411529a3067')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter os dados');
      }
      return response.json();
    })
    .then(data => {

      for(let i = 0; i < data.articles.length; i++){
        let titulo = "oi"
        let imagem = "https://rosarionavia.com/cdn/shop/products/Ro-Collective-Mia-emerald-Ring-1_1024x.jpg?v=1624467647"
        let link = "oioioi"

        let novaNoticia = {img: imagem, title: titulo, href: link}

        noticias.push(novaNoticia);


        setNoticias([...noticias])
      }
    })
    .catch(error => {
      console.error('Houve um problema ao recuperar os dados:', error);
    });
  }


  useEffect(getData, [])

  const [noticias, setNoticias] = useState([
    {
      img: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/08/1259090668-parar-de-fumar-naturalmente-1.jpg",
      title:
        "Entenda os perigos do tabagismo e diga sim para o combate ao fumo",
      href: "https://www.pfizer.com.br/noticias/ultimas-noticias/entenda-os-perigos-do-tabagismo",
    }
  ]);


  return (
    <>
      <Header title="Informações" cadastro = {true}/>
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
