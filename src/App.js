import './App.css';
import Map from './Map';
import Points from "./Points";

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img className='logo' src="https://pay.tresor.gouv.ci/r/assets/images/logo_horizontal_tresorpay.png" alt="logo" />
      </div>
      <div className='App-body'>
        <div className="map">
          <Map points={Points} />
        </div>
        <div className='form'>
          <div className="form-body">
            <h3 className='form-title'>Recherche</h3>
            <input type="text" className='form-input' />
            <button className='form-btn-search'>
              Rechercher
            </button>
          </div>

          <div className='form-list'>
            <h5 className='form-list-title'>
              POINTS AGREES TRESORMONEY
            </h5>
            {Points && Points.map((item, index) =>
              <div className="form-list-item">
                <h3 className='title'> {item.situation} </h3>
                <p className='text'>
                  <span> {item.zone} </span> - <span> {item.contact}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="App-footer">
      
      </div>
    </div>
  );
}

export default App;
