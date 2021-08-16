import React from 'react';
import "./styles.css";
import logo from "../../assets/star-wars.svg";
import star from "../../assets/estrela-da-morte.png";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div className="Header">
            <div className="container-logo">
                <img src={star} alt="Estrela da morte" className="estrela"/>
                <Link to="/">
                    <img src={logo} alt="logo star wars" className="logo-starWars"/>
                </Link>
                
            </div>
            <div className="menu-itens">
                <ul>
                    <Link to="/peoples"><li>Personagens</li></Link>
                    <Link to="/planets"><li>Planetas</li></Link>
                    <Link to="/vehicles"><li>Veículos</li></Link>
                    <Link to="/films"><li>Filmes</li></Link>
                </ul>
            </div>
        </div>
    )
}
