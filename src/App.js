import React from "react";
import "./App.css";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Container />
    </div>
  );
}

export default App;
