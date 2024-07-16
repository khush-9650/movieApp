import React from "react";
import axios from "axios";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const imdbId = params.imdbId;
  const URL = `https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${apiKey}`;
  try {
    const response = await axios.get(URL);
    return {
      movie: response.data,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error || error.message || "something went wrong";
    return {
      movie: null,
      isError: true,
      error: errorMessage,
    };
  }
}

function SingleMovieDetail() {
  const { movie: movieDetail, isError, error } = useLoaderData();
  if (movieDetail && movieDetail.Response === "False") {
    return <h1>{movieDetail.Error}</h1>;
  }
  console.log(movieDetail);
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-1">
        <h2 className="mb-2">{movieDetail.Title}</h2>
        <img src={movieDetail.Poster} alt={movieDetail.Title} />
        <p className="flex my-4">
          <span className="w-52">Release Date</span>
          <span>{movieDetail.Released}</span>
        </p>
        <p className="flex my-4">
          <span className="w-52">Genre</span>
          <span>{movieDetail.Genre}</span>
        </p>
        <p className="flex my-4">
          <span className="w-52">Runtime</span>
          <span>{movieDetail.Runtime}</span>
        </p>
        <p className="flex my-4">
          <span className="w-52">Language</span>
          <span>{movieDetail.Language}</span>
        </p>
        <p className="flex my-4">
          <span className="w-52">Awards</span>
          <span>{movieDetail.Awards}</span>
        </p>
      </div>
      <div className="lg:col-span-2">
        <div className="mb-4">
          <h3 className="mb-2">Plot</h3>
          <p>{movieDetail.Plot}</p>
        </div>
        <div className="mb-4">
          <h3 className="mb-2">Actors</h3>
          <p>{movieDetail.Actors}</p>
        </div>
        <div className="mb-4">
          <h3 className="mb-2">Country</h3>
          <p>{movieDetail.Country}</p>
        </div>
        <h2 className="mb-4">More Info</h2>
        <p className="flex my-4">
          <span className="w-52">Director</span>
          <span>{movieDetail.Director}</span>
        </p>
        <p className="flex my-4">
          <span className="w-52">imdb Rating</span>
          <span>{movieDetail.imdbRating}</span>
        </p>
        <p className="flex my-4">
          <span className="w-52">imdb Votes</span>
          <span>{movieDetail.imdbVotes}</span>
        </p>
        <p className="flex my-4">
          <span className="w-52">Box Office</span>
          <span>{movieDetail.BoxOffice}</span>
        </p>
        <p className="flex my-4">
          <span className="w-52">Metascore</span>
          <span>{movieDetail.Metascore}</span>
        </p>
        <p className="flex my-4">
          <span className="w-52">Rated</span>
          <span>{movieDetail.Rated}</span>
        </p>
      </div>
    </div>
  );
}

export default SingleMovieDetail;
