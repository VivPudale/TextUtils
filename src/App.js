import React, { useState } from "react";

import "./App.css";

import About from "./COMPONENTS/About";
import Navbar from "./COMPONENTS/Navbar";
import Textform from "./COMPONENTS/Textform";
import Alert from "./COMPONENTS/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [enable, setEnable] = useState("Enable");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setEnable("Disable");
      document.body.style.backgroundColor = "#01021a";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setEnable("Enable");
      document.body.style.backgroundColor = "#f8f9fa";
      showAlert("Dark mode has been disabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Textutils"
          aboutText="About Textutils"
          mode={mode}
          toggle={toggleMode}
          enableOrDisable={enable}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Enter the text below to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
