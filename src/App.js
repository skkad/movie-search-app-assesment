import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  // Fetch popular movies (example: default fetch or static data)
  const fetchPopularMovies = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=popular&apikey=${API_KEY}`
    );
    setMovies(response.data.Search || []);
  };

  // Search movies
  const searchMovies = async (query) => {
    if (query) {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      setMovies(response.data.Search || []);
    }
  };

  useEffect(() => {
    // fetchPopularMovies();
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="App">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={searchMovies}
      />
      <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
