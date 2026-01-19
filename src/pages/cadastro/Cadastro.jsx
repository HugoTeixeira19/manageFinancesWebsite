import React from "react";
import { Body } from "./styles.js";

const Cadastro = () => {
  const inputPeencheu = (event) => {
    console.log(event.target.value);
  };

  const cliquiNoEnviar = () => {
    console.log("Enviou");
  };

  return (
    <Body>
      <div className="container">
        <h1>Cadastro</h1>
        <form method="post">
          <label htmlFor="txtNome">Nome</label>
          <input
            onChange={inputPeencheu}
            type="text"
            name="txtNome"
            id="txtIdNome"
            required
          />

          <label htmlFor="txtSobreNome">Sobrenome</label>
          <input type="text" name="txtSobreNome" id="txtIdSobreNome" required />

          <label htmlFor="txtUsuario">Usuário</label>
          <input type="text" name="txtUsuario" id="txtIdUsuario" required />

          <label htmlFor="txtPassword">Senha</label>
          <input
            type="password"
            name="txtPassword"
            id="txtIdPassword"
            required
          />

          <div className="container-form">
            <button onClick={cliquiNoEnviar}>Enviar</button>
          </div>
        </form>
      </div>
    </Body>
  );
};

export default Cadastro;
