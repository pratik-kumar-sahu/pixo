import React from "react";
import "./Container.scss";

import Card from "../Card/Card";

function Container() {
  return (
    <>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Container;
