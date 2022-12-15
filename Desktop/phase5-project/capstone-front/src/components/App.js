import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";

import ListingContainer from "./ListingContainer";


function App() {
	const [page, setPage] = useState("/")
  const [user, setUser] = useState(localStorage.getItem("user"));
  console.log("user", user);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/user")
    .then((r) => {
      if (r.ok) {r.json()
        .then((currentUser) => setUser(currentUser));
      }
    });
  },[]);

  function handleClick(){
    fetch("logout", {
      method: "DELETE"
    }).then ((r) => {
      if (r.ok) {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
      }
    });
  }

return(
	<div>
    <NavBar />
    	<Routes>
			<Route path="/" element={<Home user = {user} setUser = {setUser} handleClick = {handleClick} />} />
      <Route path="/login" element={<Login  user = {user} setUser = {setUser} />} />
      <Route path="/signup" element={<Signup  user = {user} setUser = {setUser} />} />
      <Route path="/about" element={<About  user = {user} setUser = {setUser} />} />
		</Routes>
    <Footer />
	</div>

);
}

export default App;