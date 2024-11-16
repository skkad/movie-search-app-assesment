import React from "react";

const MovieList = ({ movies, onSelectMovie }) => {
  const capitalizeFuc = (str) => {
    // console.log(str?.substring(1));
    return str[0]?.toUpperCase() + str?.substring(1);
  };
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="movie-item"
          onClick={() => onSelectMovie(movie)}
        >
          {/* <div>
            <p>{movie.Title}</p>
          </div> */}
          <div className="img-div">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie.Title}
            />
          </div>
          <div>
            <span className="movie-type">
              {movie.Type ? capitalizeFuc(movie.Type) : movie.Type}
            </span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
