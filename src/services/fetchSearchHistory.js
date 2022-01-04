const fetchSearchHistory = () => {
  const savedSearches = localStorage.getItem("recentSearches");
  if (savedSearches) {
    return JSON.parse(savedSearches);
  } else {
    return [];
  }
};

export default fetchSearchHistory;
