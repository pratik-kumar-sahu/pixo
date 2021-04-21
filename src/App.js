import React, { useState } from "react";
import "./App.css";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Header />
      <Form />
      <Container setSelected={setSelectedImg} />
    </div>
  );
}

export default App;
