import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Alert } from "./components/Alert";
import { NavBar } from "./components/NavBar";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";

function App() {

  return (
    <FirebaseState>

    <AlertState>

      <BrowserRouter>
        <NavBar />
          <Alert />

        <div className="container pt-4">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

      </BrowserRouter>
     </AlertState>
    </FirebaseState>
  );
}

export default App;
