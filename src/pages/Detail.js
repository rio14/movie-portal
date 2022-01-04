import React from "react";
import { useLocation } from "react-router-dom";
function Detail() {
  const location = useLocation();
  const {
    Title,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    imdbRating,
    BoxOffice,
    Poster,
    Country,
  } = location.state;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-2 py-24 mx-auto">
        <div className="lg:w-full mx-auto flex flex-wrap">
          <img
            alt={Title}
            className="mx-auto object-contain object-center rounded"
            src={Poster}
          />
          <div className="lg:w-1/2 w-full lg:pl-0 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {Country}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {Title}
            </h1>
            <div className="flex my-4 flex-col">
              <span> Director - {Director}</span>
              <span>Writer - {Writer}</span>
              <span>Actors - {Actors}</span>
              <span>Released - {Released}</span>
              <span>Genre - {Genre}</span>
              <span>Language - {Language}</span>
              <span>Runtime - {Runtime}</span>
              <span>IMDBRating - {imdbRating}</span>
            </div>
            <p className="leading-relaxed">{Plot}</p>
            <div className="flex mt-4">
              <span className="title-font font-medium text-xl text-gray-900">
                Box office collection {BoxOffice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
