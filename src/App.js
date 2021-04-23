import React, { useContext, useState } from "react";
import "./App.scss";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import { Theme } from "./hooks/Theme";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const { isThemeLight, light, dark } = useContext(Theme);
  const currentTheme = isThemeLight ? light : dark;

  return (
    <div
      style={{ color: currentTheme.text, background: currentTheme.bg }}
      className="App"
    >
      <ToggleTheme />
      <Header />
      <Form />
      <Container setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
