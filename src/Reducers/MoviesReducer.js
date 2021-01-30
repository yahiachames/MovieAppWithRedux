import Movie1 from "../movie1.jpg";
import Movie2 from "../movie2.png";
import Movie3 from "../movie3.jpg";
const initState = {
  movies: [
    { title: "Interstellar", img: Movie1, rate: 5 },
    { title: "Predestination", img: Movie2, rate: 4 },
    { title: "Catch Me If You Can ", img: Movie3, rate: 3 }
  ]
};

const Moviesreducer = (state = initState, action) => {
  if (action.type === "ACTION_ADD") {
    let NewMovies = { movies: [...state.movies, action.payload] };
    state = NewMovies;
    return state;
  }

  return state;
};

export default Moviesreducer;
