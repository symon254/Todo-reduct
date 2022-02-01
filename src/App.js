import React from "react";
import { BrowserRouter as Routes, Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import TodosList from "./components/TodosLists";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/todos" className="navbar-brand">
          TODO
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/todos"} className="nav-link">
              Todos
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path={["/", "/todos"]} component={TodosList} />
          <Route exact path="/add" component={AddTodo} />
          <Route path="/todos/:id" component={Todo} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;