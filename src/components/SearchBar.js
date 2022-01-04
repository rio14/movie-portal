import React, { useState } from "react";
import Button from "./Button";
import fetchSearchHistory from "../services/fetchSearchHistory";

function SearchBar({ handelSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [recentSearches, setRecentSearches] = useState(fetchSearchHistory());
  const [inputFocus, setInputFocus] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      handelSearch(searchValue);
      const tempData = [
        ...recentSearches,
        {
          id: recentSearches.length + 1,
          text: searchValue.trim(),
        },
      ];
      setRecentSearches(tempData);
      localStorage.setItem("recentSearches", JSON.stringify(tempData));
    } else {
      setError(true);
    }
    setInputFocus(false);
  };

  const handelLiCLick = (text) => {
    handelSearch(text);
    setSearchValue(text);
    setInputFocus(false);
  };

  return (
    <div className="container  sm:w-2/3 p-3 mx-auto">
      <div className="relative">
        <input
          type="text"
          className="h-10 w-full pl-10 pr-20  border-2 border-blue-200 rounded-lg z-0 focus:shadow focus:outline-none"
          placeholder="Search anything..."
          required
          min={3}
          value={searchValue}
          onChange={handleInputChange}
          onFocus={() => setInputFocus(true)}
        />
        {error && (
          <p className="text-xs pl-2 text-red-500 mb-4">Invalid input</p>
        )}
        <div className="absolute top-1 right-2">
          <Button
            action={handleFormSubmit}
            color="blue"
            title="Search"
            type="Search"
          />
        </div>

        {inputFocus && recentSearches.length > 0 && (
          <div className="min-h-32 overflow-auto">
            <ul className="h-full w-full pl-10 pr-20 bg-white bg-scroll shadow-sm overflow-y-scroll">
              {recentSearches &&
                recentSearches.map((item, idx) => (
                  <li
                    className="my-1 py-1 border-b-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md"
                    key={item.id}
                    onClick={() => handelLiCLick(item.text)}
                  >
                    {item.text}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
