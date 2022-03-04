import { FiSearch } from "react-icons/fi";
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu cep ..." />

        <button className="buttonSearch">
            <FiSearch size={25} color="#000"/>
        </button>
    </div>

    <main className="main">
      <h2>CEP: 0005-0225</h2>

      <span>Rua Onda Verde, 37</span>
      <span>Complemento: casa 03</span>
      <span>Vila Verde</span>
      <span>São Paulo - SP</span>


    </main>
 </div>
  );
}

export default App;
