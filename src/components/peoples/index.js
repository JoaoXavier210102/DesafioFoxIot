import React, {useState, useEffect} from "react";
import "./styles.css";
import { Card, Grid } from 'semantic-ui-react';

export default function Personagens( ) {

    const [people, setPeople] = useState([]);

    useEffect (() => {
        async function buscarPessoas(){
          let res = await fetch("https://swapi.dev/api/people/?format=json");
          let data = await res.json();
          setPeople(data.results);
        }
    
        buscarPessoas();
    
      }, [])

    return (
        <div className="page-content">
            <h1>Personagens</h1>
                {people.map ((people, i) => {
                    return(
                        <div key={i}>
                            <div className="container-card">
                                <div className="card-name">
                                    <h1>{people.name}</h1>
                                </div>
                                <details>
                                    <summary>Sobre</summary>
                                    <div className="card-content">
                                    <strong>Planeta:</strong>
                                    <p>{people.homeworld}</p>
                                    <strong>Veículo:</strong>
                                    <p>{people.vehicles}</p>
                                    <strong>Massa:</strong>
                                    <p>{people.mass}</p>
                                    <strong>Cor dos olhos:</strong>
                                    <p>{people.eye_color}</p>
                                    <strong>Filmes:</strong>
                                    <p>{people.films}</p>
                                </div> 
                                </details>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
