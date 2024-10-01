import styles from './App.module.css';
import Carne from '../Carne/Carne'
import carneImg from "../../assets/Carne.png"
import Carne2 from '../Carne2/Carne2';

function App() {
  return (
      <>
      {/* Decidi grarantir os componentes. Tentei fazer todos eles de forma funcional, ou seja, fiz tudo que acreditei ser componente, a parte a seguir é referente a garantia de 7 */}
{/* 
      <Carne foto={carneImg} nomeItem="Carne" kilopreco="1Kg/Preco" preço="0000.000"/>
      <Carne foto={carneImg} nomeItem="Carne" kilopreco="1Kg/Preco" preço="0000.000"/>
      <Carne foto={carneImg} nomeItem="Carne" kilopreco="1Kg/Preco" preço="0000.000"/> */}
      

      {/* A parte a seguir é referente a garantir 10 */}
      <Carne2 foto={carneImg} nomeItem="Carne" kilopreco="1Kg/Preco" preco="0000.000" tipoCliente="Natural"/>
      </>
  );
}

export default App;
