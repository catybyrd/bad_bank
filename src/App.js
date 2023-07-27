import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import CreateAccount from"./Components/createaccount";
import AllData from "./Components/alldata";
import Deposit from "./Components/deposit";
import Withdraw from "./Components/withdraw";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/createaccount" element={<CreateAccount/>}></Route>
            <Route path="/deposit" element={<Deposit/>}></Route>
            <Route path="/withdraw" element={<Withdraw/>}></Route>
            <Route path="/alldata" element={<AllData/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;