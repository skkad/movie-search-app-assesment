import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieModal = ({ movie, onClose }) => {
  const [details, setDetails] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
      );
      setDetails(response.data || {});
      if (response) {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [movie, API_KEY]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{details.Title}</h2>
          <span className="close" onClick={onClose}>
            {/* &times; */}X
          </span>
        </div>
        {isloading ? (
          <p>Loading.....</p>
        ) : (
          <div className="modal-body">
            <p>
              <strong>Genre:</strong> {details.Genre}
            </p>
            <p>
              <strong>Plot:</strong> {details.Plot}
            </p>
            <p>
              <strong>Rating:</strong> {details.imdbRating}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieModal;
