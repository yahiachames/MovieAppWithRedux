import { combineReducers } from "redux";

import FilterReducerName from "./FilterReducerName";
import FilterReducerRating from "./FilterReducerRating";
import Moviesreducer from "./MoviesReducer";

const rootReducer = combineReducers({
  FilterReducerName,
  FilterReducerRating,
  Moviesreducer
});

export default rootReducer;
