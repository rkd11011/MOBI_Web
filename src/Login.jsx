import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="login_container">
        <div className="login_logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSmvtTSaq64tXfd0SDHqs_TmKUtdR3_NebA&usqp=CAU"
            alt=""
          />
        </div>

        <div className="login_desc">
          <p>모바일 사원증 로그인</p>
        </div>

        <div className="login_auth">
          <div className="login_emailPass">
            <div className="login_inputFields">
              <div className="login_inputField">
                <input
                  type="text"
                  placeholder="이메일"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="login_inputField">
                <input
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" onClick={handleLogin}>
              로그인
            </button>
          </div>
        </div>

        <div className="login_footer">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>&copy; 12팀</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
