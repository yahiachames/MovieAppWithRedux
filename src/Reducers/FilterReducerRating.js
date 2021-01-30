const FilterReducerRating = (state = 0, action) => {
  if (action.type === "ACTION_RATING") {
    return action.payload;
  }
  return state;
};

export default FilterReducerRating;
