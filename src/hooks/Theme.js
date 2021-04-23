import React, { Component, createContext } from "react";

export const Theme = createContext();

class ThemeProvider extends Component {
  state = {
    isThemeLight: true,
    mode: true,
    light: { bg: "#e5e7eb", text: "#000" },
    dark: { bg: "#111827", text: "#fff" },
  };

  toggleTheme = () => {
    this.setState({
      isThemeLight: !this.state.isThemeLight,
      mode: !this.state.mode,
    });
  };

  render() {
    return (
      <Theme.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </Theme.Provider>
    );
  }
}

export default ThemeProvider;
