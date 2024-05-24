"use client"

import NavBar from "../components/navbar";
import Header from "../components/header";
import PageTemplate from "../components/page_template";
import { useEffect, useState } from "react"
import Link from "next/link";
import "./page.css";

export default function Conta(){

    let [opcSelecio, setOpcao] = useState(null)



    return(
        <> 
           <Header title="Opções da Conta" cadastro={false}></Header>
           <PageTemplate>
                <div className="options-box">

                    <div className="options-button">
                        <button>Alterar senha</button>
                    </div>

                    <div className="options-button">
                        <button>Checar dados da conta</button>
                    </div>

                    <div className="options-button">
                        <button>Deletar conta</button>
                    </div>

                </div>

            </PageTemplate> 

        </>
    )
}