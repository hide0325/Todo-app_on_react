import React, { useState } from "react";
import { Grid, Typography } from '@material-ui/core';
import logo from './logo.svg';
import "./App.css";
import Form from "./components/Form";
import CheckAll from "./components/CheckAll";
import DeleteAll from "./components/DeleteAll";
import Filter from "./components/Filter";
import EditTodo from "./components/EditTodo";
import Todo from "./components/Todo";

let currentId = 0;

export default function App() {
  const [todos, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter(({ completed }) => {
    switch (filter) {
      case "all":
        return true;

      case "uncompleted":
        return !completed;

      case "completed":
        return completed;

      default:
        return true;
    }
  });

  const handleSubmit = (text) => {
    if (text) {
      const newTodo = {
        id: currentId,
        text,
        completed: false,
        editing: false
      };

      setTodo([...todos, newTodo]);
      currentId++;
    }
  };

  const handlechangeTodoAttribute = (id, key, value) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          [key]: value
        };
      }
      return todo;
    });
    setTodo(newTodos);
  };

  const handlechangeAllCompleted = (completed) => {
    const newTodos = todos.map((todo) => ({
      ...todo,
      completed
    }));
    setTodo(newTodos);
  };

  const handleChangeFilter = (filter) => {
    setFilter(filter);
  };

  const handleUpdateTodoText = (id, text) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
          editing: false
        };
      }
      return todo;
    });
    setTodo(newTodos);
  };

  const handleClickDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodo(newTodos);
  };

  const handleClickDeleteCompleted = () => {
    const newTodos = todos.filter(({ completed }) => !completed);
    setTodo(newTodos);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh", width: "80%", margin: "20px auto" }}
    >

      <div className="title">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
        >
        React hooks Todo-App
        </Typography>
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="container">
        <Form onSubmit={handleSubmit} />

        <div className="filter">
          <CheckAll
            allCompleted={
              todos.length > 0 && todos.every(({ completed }) => completed)
            }
            onChange={handlechangeAllCompleted}
          />

          <Filter
            filter={filter}
            onChange={handleChangeFilter}
          />
        </div>

        {filteredTodos.map(({ id, text, completed, editing }) => (
          <div key={id}>
            {editing ? (
              <EditTodo
                id={id}
                text={text}
                onCancel={handlechangeTodoAttribute}
                onSubmit={handleUpdateTodoText}
              />
            ) : (
              <Todo
                id={id}
                text={text}
                completed={completed}
                onChange={handlechangeTodoAttribute}
                onDelete={handleClickDelete}
              />
            )}
          </div>
        ))}

        <div className="delete-all">
          <DeleteAll onClick={handleClickDeleteCompleted} />
        </div>  
      </div>

    </Grid>
  );
}
