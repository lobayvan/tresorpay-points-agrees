import './App.css';
import Map from './Components/Map';
import Header from './Components/Header';
import Form from './Components/Form';
import Points from "./Points";


function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-body'>
        <Map points={Points} />
        {/* <Form /> */}
      </div>
      <div className="App-footer">
        <img className='logo' src="https://pay.tresor.gouv.ci/r/assets/images/footer_principale.png" />
        <br />
        © Copyright 2020 DIRECTION GÉNÉRALE DU TRÉSOR ET DE LA COMPTABILITÉ PUBLIQUE
        <br />
        Pour toutes vos préoccupations, écrire à : <a mailto="cetp@tresor.gouv.ci">cetp@tresor.gouv.ci</a>
      </div>
    </div>
  );
}

export default App;
