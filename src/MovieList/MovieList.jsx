import React, { Component } from "react";

import Add from "../add.png";
import "./Style.css";
import Stars from "../StarsComponent/StarsComponent";
import { connect } from "react-redux";
import ActionAdd from "../Actions/ActionAdd";

class MovieList extends Component {
  handelButton = () => {
    let NewMovie = {
      title: prompt("enter the title of movie"),
      img: prompt("enter the Link of cover"),
      rate: prompt("enter the number of stars")
    };
    this.props.ActionAdd(NewMovie);
  };

  render() {
    return (
      <div className="container">
        <div className="movie-list">
          {this.props.movies
            .filter(
              el =>
                el.title.search(this.props.SearchedName) !== -1 &&
                el.rate >= this.props.SearchedRating
            )
            .map(el => {
              return (
                <div className="movie">
                  <span>
                    <Stars number={el.rate} />
                  </span>
                  <img
                    src={el.img}
                    alt=""
                    style={{ width: "180px", height: "190px" }}
                  />
                  <h5 style={{ color: "white" }}> {el.title} </h5>
                </div>
              );
            })}
          <button className="addmovie" onClick={() => this.handelButton()}>
            <img src={Add} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.Moviesreducer.movies,
    SearchedName: state.FilterReducerName,
    SearchedRating: state.FilterReducerRating
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ActionAdd: a => dispatch(ActionAdd(a))
   
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

