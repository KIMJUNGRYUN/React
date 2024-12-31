

function MovieList(props) {
  return (
  <>
    {props.movies.map((movie => (
      <div className="d-flex m-3" key={movie.imdbID}>
        <img src={movie.Poster} />
     </div> 
     )))}  
  </>
  );
}

export default MovieList