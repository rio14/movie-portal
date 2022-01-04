import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movieData }) {
  const { Poster, Title, Year } = movieData;
  return (
    <div className="w-full max-w-sm mx-auto my-4 text-center rounded-md shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <Link
        to={{
          pathname: "/detail",
          search: `${Title}`,
        }}
        state={movieData}
      >
        <div className="block relative h-52 rounded overflow-hidden">
          <img
            alt={Title}
            className="object-contain object-center w-full h-full block"
            src={Poster}
          />
        </div>

        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {Title}
          </h2>
          <p className="my-2">{Year}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
