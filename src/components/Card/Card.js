import React from "react";
import "./Card.scss";

function Card() {
  return (
    <div className="card">
      <img
        className="card__image"
        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="pics"
      />
    </div>
  );
}

export default Card;
