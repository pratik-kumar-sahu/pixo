import React, { useState } from "react";
import Progress from "../Progress/Progress";
import "./Form.scss";

function Form() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowedType = ["image/jpeg", "image/png", "image/gif"];

  const changeHandler = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && allowedType.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select valid jpeg, png or gif files");
    }
  };

  return (
    <form className="form">
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="status">
        {error && <div style={{ color: "orangered" }}>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <Progress file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default Form;
