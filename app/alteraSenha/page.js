"use client"

import Header from "../components/header";
import PageTemplate from "../components/page_template";
import { useEffect, useState } from "react"
import Link from "next/link";

import "./page.css";

export default function CadastroPage(){
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        const userData = {email, password};

        // Enviar os dados para o json-server
        fetch("http://localhost:3001/users", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
        });
    };


    return(
        <>
        <Header title="Informações" cadastro = {false}/>
        <PageTemplate>
            <form id="change-main" onSubmit={handleSubmit}>
                <div id="change-div">
                    <h3>Insira seu email:</h3>

                    <div className="change-input-element">
                        <label className="change-input-label">Email:</label>
                        <input
                        className="change-input"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <h3>Insira sua nova senha:</h3>
                    
                    <div className="change-input-element">
                        <label className="change-input-label">Senha:</label>
                        <input
                        className="change-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                </div>
                <Link href="/login" className="change-input-element">
                    <button type="submit">Enviar</button>
                </Link>
            </form>
        </PageTemplate>
        </>
    )
}