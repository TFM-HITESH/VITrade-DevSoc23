import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { Firebase } from "../../firebase/config";
import Logo from "../../olx-logo.png";
import RoundLoading from "../Loading/RoundLoading";
import "./Login.css";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate("/")
    }).catch((error)=>{
      alert(error.message)
    })
  };
  return (<>
    {loading && <RoundLoading/> }

    <div className="loginMain">
      <div className="loginParentDiv">
       <center><img width="100px" height="100px" src={Logo} alt="" ></img></center> 
        <form onSubmit={handleSubmit}><br />
          <input
            className="input"
            type="email"
            placeholder="VIT Email ID"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <br/>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div> 
    </div>
    </>
  );
}

export default Login;