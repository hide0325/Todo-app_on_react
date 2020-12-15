import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core';

const EditTodo = ({ id, text, onCancel, onSubmit }) => {
  const [currentText, setText] = useState(text);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClickCancel = () => {
    onCancel(id, "editing", false);
  };

  const handleSubmit = () => {
    if (!currentText) return;

    onSubmit(id, currentText);
  };

  return (
    <div className="todo">
      <TextField
        type="text"
        value={currentText}
        onChange={handleChange}
      />
      <div className="todo-btns todo-btns--edit">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickCancel}
        >cancel</Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >update</Button>
      </div>
    </div>
  );
};

export default EditTodo;
