import './App.css';
import Map from './Components/Map';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Points from "./Points";


function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-body'>
        <Map points={Points} />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
