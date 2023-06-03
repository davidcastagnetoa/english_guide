import React, { useContext, useState } from "react";

export const SearchContext = React.createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      id: 1,
      name: "John Doe",
      url: "https://www.example.com/john-doe",
    },
    {
      id: 2,
      name: "Jane Doe",
      url: "https://www.example.com/jane-doe",
    },
  ];

  const handleSearch = () => {
    // Get the text that the user typed in
    const term = searchTerm.trim();

    // Search for the term in the application's data
    const results = data.filter((item) => item.name.includes(term));
    console.log(results);

    // If the results are empty, return a card with the text "No found"
    if (results.length === 0) {
      return (
        <div>
          <h1>No results found</h1>
        </div>
      );
    }
    console.log("No results found");

    // Otherwise, return a card for each result
    return (
      <div>
        {results.map((result) => (
          <div key={result.id}>
            <h2>{result.name}</h2>
            <a href={result.url}>View</a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  return {
    searchTerm: context.searchTerm,
    setSearchTerm: context.setSearchTerm,
    handleSearch: context.handleSearch,
  };
};
