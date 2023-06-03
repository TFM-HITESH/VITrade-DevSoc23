import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { Firebase } from "../../firebase/config";
import { useNavigate } from "react-router";
import SignUpLoading from "../Loading/SignUpLoading";

export default function Signup() {
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: name }).then(() => {
          Firebase.firestore().collection("users").doc(result.user.uid).set({
            id: result.user.uid,
            name: name,
            phone: phone,
          });
        });
      })
      .then(() => {
        navigate("/login");
      });
  };
  return (<>
    {loading && <SignUpLoading/> } <div>
      <div className="signupParentDiv">
        <center><img width="100px" height="100px" src={Logo} alt=""></img></center>
        <form onSubmit={handleSubmit}>
          <br />
          <input
            className="input"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <br />
          <br />
          <input
            className="input"
            type="email"
            placeholder="VIT Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          /><br />
          <br />
          <input
            className="input"
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          /><br />
          <br />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br/>
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div> 
    </>
  );
}