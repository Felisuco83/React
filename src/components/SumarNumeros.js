function SumarNumeros(props) {
  const suma = (num1, num2) => {
    return num1 + num2;
  };
  const { num1, num2, color } = props;
  var stylo = { color: props.color };
  return (
    <h1 style={stylo}>
      La suma de los números que recibí es{" "}
      {suma(parseInt(props.num1), parseInt(props.num2))}
    </h1>
  );
}
export default SumarNumeros;
