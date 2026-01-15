import React from "react";
import "../Login.css";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form method="post">
        <label htmlFor="txtUsuario">Usuário</label>
        <input type="text" name="txtUsuario" id="txtIdUsuario" />

        <label htmlFor="">Senha</label>
        <input type="password" name="txtPassword" id="txtIdPassword" />
      </form>
    </div>
  );
};

export default Login;
