import React from "react";
import MovieCard from "./MovieCard";

function MovieCardList({ movieData }) {
  return (
    <section className="container px-3 py-8 mx-auto">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {movieData.map((movie) => (
          <MovieCard key={movie.Title} movieData={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieCardList;
