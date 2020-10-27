import logo from "../../logo.svg";
import "./App.css";
import Saludo from "./../Saludo";

function App() {
  const metodoPadre = (descripcion) => {
    console.log("Método del padre: " + descripcion);
  };
  return (
    <div className="App">
      <Saludo nombre="Adrian" edad="21" metodo={metodoPadre} />
      <Saludo nombre="Hector" edad="15" metodo={metodoPadre} />
      <Saludo nombre="Carla" edad="40" metodo={metodoPadre} />
      <Saludo metodo={metodoPadre} />
    </div>
  );
}

export default App;
