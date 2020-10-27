function Saludo(props) {
  // var name = props.nombre;
  // var age = props.edad;
  var ejemplo = "El atleti sigue con 0 champions";
  const botonPulsado = () => {
    console.log("Has pulsado el botón");
    ejemplo = "Pa siempre";
  };
  const sumarNumeros = (num1, num2) => {
    var suma = num1 + num2;
    console.log(suma);
  };
  const mostrarMensaje = () => {
    return <h1>Soy un mensaje HTML</h1>;
  };
  var estiloFeo = { color: red, backgroundColor: green };
  const { nombre, edad, metodo } = props;
  return (
    <div>
      <h1 style={estiloFeo}>{ejemplo}</h1>
      {sumarNumeros(7, 7)}
      {botonPulsado()}
      {mostrarMensaje()}
      <h1>
        {" "}
        Saludando a {nombre} con edad {edad}{" "}
      </h1>
      <button onClick={() => metodo("Nombre: " + nombre + " Edad: " + edad)}>
        {" "}
        Método padre{" "}
      </button>
      <button onClick={() => botonPulsado()}> Púlsame </button>
      <button onClick={() => sumarNumeros(4, 5)}> Mostrar suma </button>
    </div>
  );
}
export default Saludo;
