import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  // Quantos palpites a maquina deu
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  // Chute pode ser de 0 a 300
  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMinimo(0);
    setMaximo(300);
    setNumPalpites(1);
    palpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar!</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMaximo(palpite);
    const proxPalpite = parseInt((palpite - minimo) / 2) + minimo;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMinimo(palpite);
    const proxPalpite = parseInt((maximo - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número de {palpite} com {numPalpites} chutes!!
        </p>
        <button onClick={iniciarJogo}>Iniciar Novamente</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu numero é {palpite}?</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="DevPleno" />, rootElement);
