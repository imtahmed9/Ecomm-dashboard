import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function singUp() {
    let item = { name, email, password };
    console.log(item);
    const requestOption = {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(item),
    };
    let result = await fetch('http://localhost:8000/api/register', requestOption);
    let result1 = await result.json();
    console.warn("result", result1);
    localStorage.setItem("user-info", JSON.stringify(result1));
    history.push("/add");
  }


  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>User Sign up Page</h1>
      <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name" />
      <br />
      <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
      <br />
      <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
      <br />
      <button className="btn btn-primary" onClick={singUp}>Sign up</button>
    </div>
  );
}

export default Register;
