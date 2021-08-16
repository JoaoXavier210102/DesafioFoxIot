import React, {useState, useEffect} from "react";
import "./styles.css";

export default function Vehicles() {

    const [vehicles, setVehicles] = useState([]);

    useEffect (() => {
        async function buscarVeiculos(){
          let res = await fetch("https://swapi.dev/api/vehicles/?format=json");
          let data = await res.json();
          setVehicles(data.results);
        }

        buscarVeiculos();
    
      }, [])

    return (
        <div className="page-content">
            <h1>Veículos</h1>
            {vehicles.map ((vehicles, i) => {
                    return(
                        <div key={i}>
                            <div className="container-card">
                                <div className="card-name">
                                    <h1>{vehicles.name}</h1>
                                </div>
                                <details>
                                    <summary>Sobre</summary>
                                    <div className="card-content">
                                    <strong>Modelo:</strong>
                                    <p>{vehicles.model}</p>
                                    <strong>Comprimento:</strong>
                                    <p>{vehicles.length}</p>
                                    <strong>Fabricante:</strong>
                                    <p>{vehicles.manufacturer}</p>
                                    <strong>Classe:</strong>
                                    <p>{vehicles.vehicle_class}</p>
                                    <strong>Passageiros:</strong>
                                    <p>{vehicles.passengers}</p>
                                </div> 
                                </details>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
