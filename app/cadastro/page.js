"use client"

import NavBar from "../components/navbar";
import Header from "../components/header";
import PageTemplate from "../components/page_template";
import { useEffect, useState } from "react"
import Link from "next/link";

import "./page.css";

export default function CadastroPage(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const userData = {
        name,
        email,
        password,
        };

        // Enviar os dados para o json-server
        fetch("http://localhost:3001/users", {
            method: "POST",
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
                    <h3>Preencha seus dados:</h3>
                    <div className="register-inputs-div">
                    <div className="register-input-element">
                        <label className="register-input-label">Nome</label>
                        <input
                        className="register-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="register-input-element">
                        <label className="register-input-label">Email</label>
                        <input
                        className="register-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="register-input-element">
                        <label className="register-input-label">Senha</label>
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