import React from 'react';
import falcon from "../../assets/falcon.png";
import styles from "./styles.css";

export default function Main() {
    return (
        <div className="main">
            <div className="content-main">
                <img src={falcon} alt="Millennium Falcon" className="falcon"></img>
                <div className="text-main">
                    <h1>Seja Bem-Vindo!</h1>
                    <h2>Que a força esteja com você...</h2>
                    <p>Experimente usar os botões no header :D</p>
                </div>
            </div>
        </div>
    )
}
