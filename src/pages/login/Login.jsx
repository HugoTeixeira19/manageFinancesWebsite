import React from "react";
import { Body } from "../cadastro/styles.js";

const Login = () => {
  return (
    <Body>
      <div className="container">
        <h1>Login</h1>
        <form method="post">
          <label htmlFor="txtUsuario">Usuário</label>
          <input type="text" name="txtUsuario" id="txtIdUsuario" />

          <label htmlFor="txtPassword">Senha</label>
          <input type="password" name="txtPassword" id="txtIdPassword" />
        </form>
        <div className="container-form">
          <button>Entrar</button>
          <p>
            Não possui conta?<a>Cadastre-se</a>
          </p>
        </div>
      </div>
    </Body>
  );
};

export default Login;
