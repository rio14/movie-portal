import React, { useState, useEffect } from "react";
import "./index.css";
import quotes from "../movieQuotes.json";
function Loader() {
  const [randomQuote, setRandomQuote] = useState({
    id: 1,
    quote: `âYou can never be overdressed or overeducated.â
â Oscar Wilde`,
  });
  useEffect(() => {
    const randomElement =
      quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
    setRandomQuote(randomElement.quote.split("â"));
  }, []);
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
      <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
        <div className="loader-dots block relative w-20 h-5 mt-2">
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-700"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-700"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-700"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-700"></div>
        </div>
        <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
          <p className="mb-2">{randomQuote[0]}</p>
        </blockquote>
      </div>
    </div>
  );
}

export default Loader;
