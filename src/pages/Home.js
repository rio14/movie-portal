import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardList from "../components/MovieCardList";
import SearchBar from "../components/SearchBar";
import fetchMovies from "../services/fetchMovies";
import data from "../dummyData.json";
import { LoginContext } from "../contexts/LoginContext";
import Loader from "../components/Loader";

function Home() {
  const navigate = useNavigate();
  const { userName } = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (!userName) navigate("Login");
    setLoading(false);
  }, [setLoading, navigate, userName]);

  const handelSearch = async (q) => {
    setLoading(true);
    const data = await fetchMovies(q);
    setMovieData(data);
    setLoading(false);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container px-5 py-12 mx-auto">
      <SearchBar handelSearch={handelSearch} />
      {movieData ? (
        <MovieCard movieData={movieData} />
      ) : (
        <MovieCardList movieData={data.data} />
      )}
    </div>
  );
}

export default Home;
