import React from "react";
import ActionRating from "../Actions/ActionRating";
import { connect } from "react-redux";

const Stars = props => {
  console.log(props);

  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= props.SearchedRating || i <= props.number) {
      stars.push(<span> &#x2605;</span>);
    } else {
      stars.push(
        <span
          key={i}
          onClick={() => {
            props.getRating(i);
          }}
        >
          {" "}
          &#x2606;
        </span>
      );
    }
  }
  return <div className="stars">{stars}</div>;
};

const mapStateToProps = state => {
  return {
    SearchedRating: state.FilterReducerRating
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRating: a => dispatch(ActionRating(a))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stars);
