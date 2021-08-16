import React, {useState, useEffect} from "react";
import "./styles.css";

export default function Filmes( ) {

    const [films, setFilms] = useState([]);

    useEffect (() => {
    
        async function buscarFilmes(){
          let res = await fetch("https://swapi.dev/api/films/?format=json");
          let data = await res.json();
          setFilms(data.results);
        }
    
        buscarFilmes();
    
      }, [])

    return (
        <div className="page-content">
            <h1>Filmes</h1>
                {films.map ((films, i) => {
                    return(
                        <div key={i}>
                            <div className="container-card">
                                <div className="card-name">
                                    <h1>{films.title}</h1>
                                </div>
                                <details>
                                    <summary>Sobre</summary>
                                    <div className="card-content">
                                    <strong>Diretor:</strong>
                                    <p>{films.director}</p>
                                    <strong>Produtora:</strong>
                                    <p>{films.producer}</p>
                                    <strong>Data de lançamento:</strong>
                                    <p>{films.release_date}</p>
                                </div> 
                                </details>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
