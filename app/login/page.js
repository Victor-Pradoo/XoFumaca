import "./page.css";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div id="login-main">
      <div id="login-div">
        <img id="login-logo" src="./xofumaca_logo.png" />
        <div className="login-inputs-div">
          <div className="login-input-element">
            <label className="login-input-label">Email</label>
            <input className="login-input" type="email"></input>
          </div>
          <div className="login-input-element">
            <label className="login-input-label">Senha</label>
            <input className="login-input" type="password"></input>
          </div>
          <Link href="/tracker" style={{ width: "100%" }}>
            <button className="login-submit-button">Log in</button>
          </Link>
        </div>
        <div className="login-separador"></div>
        <a className="login-forgotpassword-button">Esqueci a senha</a>
      </div>
    </div>
  );
}
