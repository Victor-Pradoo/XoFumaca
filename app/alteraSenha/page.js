"use client"

import NavBar from "../components/navbar";
import Header from "../components/header";
import PageTemplate from "../components/page_template";
import { useEffect, useState } from "react"
import Link from "next/link";

import "./page.css";

export default function CadastroPage(){
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const userData = {password};

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
            <div id="register-main">
                <div id="register-div">
                    <h3>Insira sua nova senha:</h3>
                    <div className="register-inputs-div">
                    
                        <div className="register-input-element">
                            <label className="register-input-label">Senha:</label>
                            <input
                            className="register-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Link href="/login" className="register-input-element">
                            <button onClick={handleSubmit}>Enviar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTemplate>
        </>
    )
}