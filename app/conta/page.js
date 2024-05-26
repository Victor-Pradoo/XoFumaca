"use client"

import NavBar from "../components/navbar";
import Header from "../components/header";
import PageTemplate from "../components/page_template";
import { useEffect, useState } from "react"
import Link from "next/link";
import "./page.css";

export default function Conta(){

    return(
        <> 
           <Header title="Opções da Conta" cadastro={false}></Header>
           <PageTemplate>
                <div className="options-box">
                    <Link href="/alteraSenha">
                        <div className="options-button">
                            <button>Alterar senha</button>
                        </div>
                    </Link>

                    <Link href="/checardadosConta">
                        <div className="options-button">
                            <button>Checar dados da conta</button>
                        </div>
                    </Link>

                    <Link href="/deletaConta">
                        <div className="options-button">
                            <button>Deletar conta</button>
                        </div>
                    </Link>
                </div>

            </PageTemplate> 

        </>
    )
}