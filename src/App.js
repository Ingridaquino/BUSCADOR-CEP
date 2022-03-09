import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import './styles.css';

import api from './services/api';


function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({}); /** Guarda as informações do cep */

  async function handleSearch(){

    if(input === "") {
      alert('Preencha algum CEP')
      return;
    }

    try{/**É o que voc quer fazer, mas que pode dar errado. Assim ele vai para o catch */
      const response = await api.get(`${input}/json`);

      setCep(response.data) /**Recebe as informações do cep */
      setInput('') /**Para limpar o cep, após a consulta */
    }catch{
      alert('Ops erro ao buscar **')
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" 
        placeholder="Digite seu cep ..."
        value={input}
        onChange={(e) => setInput(e.target.value)} /**Para guarda o valor recebido pelo usuario */
        />

        <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="#f1f1f1"/>
        </button>
    </div>

    {Object.keys(cep).length > 1 && ( /**Para verificar se tem alguma coisa no cep, caso tenha mostre as informações */
     
        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>


        </main>
    )}
 </div>
  );
}

export default App;
