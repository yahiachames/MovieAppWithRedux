import React, { Component } from "react";
import MovieList from "../MovieList/MovieList";
import Stars from "../StarsComponent/StarsComponent";
import "./Style.css";
import ActionName from "../Actions/ActionName";

import { connect } from "react-redux";
class MovieCard extends Component {
  searchbyName = e => {
    let x = "";
    x = e.target.value;

    this.props.getName(x);
  };

  searchbyStars = stars => {};
  render() {
    return (
      <div className="movie-app">
        <div className="inputs">
          <form>
            <input
              type="text"
              onChange={this.searchbyName}
              className="typingbar"
              placeholder="type movie name here"
            />
            <input type="submit" value="search" className="submitbtn" />
          </form>

          <Stars />
        </div>
        <MovieList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getName: a => dispatch(ActionName(a))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieCard);
