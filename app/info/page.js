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


    fetch('https://newsapi.org/v2/everything?qInTitle=tabagismo%20OR%20%22cigarros%20eletr%C3%B4nicos%22&apiKey=86ce4e05338145d59049c411529a3067')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter os dados');
      }
      return response.json();
    })
    .then(data => {

      for(let i = 0; i < data.articles.length; i++){
        let titulo = data.articles[i].title
        let imagem = data.articles[i].urlToImage
        let link = data.articles[i].url

        let novaNoticia = {img: imagem, title: titulo, href: link}

        noticias.push(novaNoticia);
      }
      
      setNoticias([...noticias])
    })
    .catch(error => {
      console.error('Houve um problema ao recuperar os dados:', error);
    });
  }


  useEffect(getData, [])

  const [noticias, setNoticias] = useState([]);


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
