import React from 'react';
import styles from "./styles.css";
import bb8 from "../../assets/bb8.png";
import r2d2 from "../../assets/r2d2.png";

export default function Footer() {
    return (
        <div className="Footer">
            <img src={bb8} alt="Robô bb-8" className="bb-8"/>
            <strong>Desenvolvido por João Xavier  😊 </strong>
            <img src={r2d2} alt="Robô R2-D2" className="r2-d2"/>
        </div>
    )
}
