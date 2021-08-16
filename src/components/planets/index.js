import React, {useState, useEffect} from "react";
import "./styles.css";

export default function Planets() {

    const [planets, setPlanets] = useState([]);

    useEffect (() => {
        async function buscarPlanetas(){
          let res = await fetch("https://swapi.dev/api/planets/?format=json");
          let data = await res.json();
          setPlanets(data.results);
        }
    
        buscarPlanetas();
    
      }, [])

    return (
        <div className="page-content">
            <h1>Planets</h1>
            {planets.map ((planets, i) => {
                    return(
                        <div key={i}>
                            <div className="container-card">
                                <div className="card-name">
                                    <h1>{planets.name}</h1>
                                </div>
                                <details>
                                    <summary>Sobre</summary>
                                    <div className="card-content">
                                    <strong>Clima:</strong>
                                    <p>{planets.climate}</p>
                                    <strong>População:</strong>
                                    <p>{planets.population}</p>
                                    <strong>Diâmetro:</strong>
                                    <p>{planets.diameter}</p>
                                    <strong>Terreno:</strong>
                                    <p>{planets.terrain}</p>
                                    <strong>Gravidade:</strong>
                                    <p>{planets.gravity}</p>
                                </div> 
                                </details>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
