import React, { useState } from "react";
import "./Form.scss";

function Form() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);

  const allowedType = ["image/jpeg", "image/png", "image/gif"];

  const changeHandler = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && allowedType.includes(selectedFile.type)) {
      setFile(selectedFile);
      setMessage(selectedFile.name);
    } else {
      setFile(null);
      setMessage("Please select valid jpeg, png or gif files");
    }
  };

  return (
    <form className="form">
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="status">{message}</div>
    </form>
  );
}

export default Form;
