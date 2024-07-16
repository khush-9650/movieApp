import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ Title, Year, imdbID, Type, Poster }) {
  return (
    <Link
      to={`/detail/${imdbID}`}
      className="p-4 grid place-content-center text-center bg-white rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <img
        src={
          Poster === "N/A"
            ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQs2Y6KaCvvRLfhhULXsrwHaLD%26pid%3DApi&f=1&ipt=77720d684ff9f868dc3ec3a79eac87430c1b297981428b95dde9647b5935ec49&ipo=images"
            : Poster
        }
        alt=""
        className="w-72 h-96 object-fill mb-4 rounded-md"
      />
      <h2 className="text-xl my-1">{Title}</h2>
      <h4 className="text-gray-500 capitalize">{Year}</h4>
      <h4 className="text-gray-500 capitalize">{Type}</h4>
    </Link>
  );
}

export default MovieCard;
