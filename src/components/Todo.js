import React from "react";
import { Button, Checkbox } from '@material-ui/core';

const Todo = ({ id, text, completed, onChange, editing, onDelete }) => {
  const handleChangeCompleted = () => {
    onChange(id, "completed", !completed);
  };

  const handleclickEdit = (v) => {
    onChange(id, "editing", !editing);
  };

  const handleClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="todo">
      <label className="todo__content">
        <Checkbox
          checked={completed}
          onChange={handleChangeCompleted}
        />
        <div className="todo-text">{text}</div>
      </label>
      <div className="todo-btns">
        <Button
          variant="contained"
          color="primary"
          onClick={handleclickEdit}
        >edit</Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickDelete}
        >delete</Button>
      </div>
    </div>
  );
};

export default Todo;
