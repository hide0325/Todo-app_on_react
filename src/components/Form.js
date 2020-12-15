import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core';

const Form = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    onSubmit(input);
    setInput("");
  };

  return (
    <form className="add">
      <TextField
        type="text"
        value={input}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >add</Button>
    </form>
  );
};

export default Form;
