import React, { useContext } from "react";
import { Theme } from "../../hooks/Theme";
import "./ToggleTheme.scss";

const ToggleTheme = () => {
  const { mode, toggleTheme } = useContext(Theme);

  return <button onClick={toggleTheme}>{mode ? "☀️" : "🌙"}</button>;
};

export default ToggleTheme;
