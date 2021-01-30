import React, { Component } from "react";
import MovieCard from "./MovieCard/MovieCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieCard />
      </div>
    );
  }
}

export default App;
