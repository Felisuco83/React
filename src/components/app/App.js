import logo from "../../logo.svg";
import "./App.css";
import Saludo from "./../Saludo";
import SumarNumeros from "./../SumarNumeros";

function App() {
  return (
    <div className="App">
      <SumarNumeros num1="7" num2="6" color="purple" />
      <SumarNumeros num1="5" num2="2" color="red" />
      {/* <Saludo nombre="Adrian" edad="21" metodo={metodoPadre} />
      <Saludo nombre="Hector" edad="15" metodo={metodoPadre} />
      <Saludo nombre="Carla" edad="40" metodo={metodoPadre} />
      <Saludo metodo={metodoPadre} /> */}
    </div>
  );
}

export default App;
