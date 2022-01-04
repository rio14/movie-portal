import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContext } from "./contexts/LoginContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <div className="flex flex-col justify-between bg-gray-50 min-h-screen">
      <LoginContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" caseSensitive={false} element={<Login />} />
            <Route path="/detail" caseSensitive={false} element={<Detail />} />
            <Route path="/" caseSensitive={false} element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
