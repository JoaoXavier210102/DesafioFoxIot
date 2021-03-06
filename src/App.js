import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import personagens from "./components/peoples";
import Films from "./components/films";
import planetas from "./components/planets";
import veiculos from "./components/vehicles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";

function App() {

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    async function buscarPessoas(){
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
    }

    async function buscarPlanetas(){
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
    }

    async function buscarVeiculos(){
      let res = await fetch("https://swapi.dev/api/vehicles/?format=json");
      let data = await res.json();
      setVehicles(data.results);
    }

    async function buscarFilmes(){
      let res = await fetch("https://swapi.dev/api/films/?format=json");
      let data = await res.json();
      setFilms(data.results);
    }

    buscarPessoas();
    buscarPlanetas();
    buscarVeiculos();
    buscarFilmes();

    setLoading(false);

  }, [])

  console.log("pessoas", people);
  console.log("planetas", planets);
  console.log("veiculos", vehicles);
  console.log("Filmes", films);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Carregando...</Loader>
          </Dimmer>
        ) : (
          <Switch>

            <Route exact path="/" component={Main}>

            </Route>

            <Route exact path="/peoples" component={personagens}>
              {/* <peoples /> */}
            </Route>

            <Route path="/planets" component={planetas} data={planets}>
              {/* <planets /> */}
            </Route>
          
            <Route path="/vehicles" component={veiculos} data={vehicles}>
              {/* <vehicles /> */}
            </Route>

            <Route path="/films" component={Films}>

            </Route>

          </Switch>
        )}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
