import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Form from './components/Form';
import Login from './components/login';
import SignUp from './components/SignUp';

function App() {
  const [post, setPost] = useState([]);
  const [input, setInput] = useState("");


  
  const [user,setUser] = useState({
        name: "",
				email: "",
				password: "",
        re_password:""
  });
  const [nav,setNav] = useState(false)
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    re_password:""
  })

  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
              <Route path='/' element={<SignUp error={error}  setError={setError} user={user} setUser={setUser} nav={nav} setNav={setNav} />} />
              <Route path='/login' element={<Login error={error}  setError={setError} user={user} setUser={setUser} />} />
              <Route path='/form' element={<Form post={post} setPost={setPost} input={input} setInput={setInput} />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
