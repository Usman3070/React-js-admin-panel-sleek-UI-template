
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const DomainSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    try {
        const response = await fetch(`${BASE_URL}/domain/domain-check/?domain_name=${encodeURIComponent(value)}`);
  
        if (response.ok) {
          const data = await response.json();
          setIsAvailable(data.is_available);
        } else {
          console.error('Failed to fetch suggestions:', response.statusText);
          setIsAvailable(false);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
  
    // Here you can call a function to fetch and update suggestions based on the value
    // For simplicity, let's assume suggestions are hard-coded for now
    const fakeSuggestions = [
        "example.com",
        "example.net",
        "example.org",
        "example1.com",
        "example2.net",
        "example3.org",
        "example4.com",
      ];
    setSuggestions(fakeSuggestions.filter(suggestion => suggestion.includes(value)));
  };
  
  const handleSuggestionClick = (selectedSuggestion) => {
    // Set the search term to the selected suggestion
    setSearchTerm(selectedSuggestion);
    // Clear suggestions
    setSuggestions([]);
  };
  return (
    <>
      <h1 className="text-3xl text-center md:text-5xl p-2 text-yellow-300 tracking-loose">
        Check your domain
      </h1>
      <form action="" className="relative mx-auto w-max">
        <input
          type="search"
          value={searchTerm}
          onChange={handleInputChange}
          className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>

      {/* Display suggestions only when there is input */}

      {searchTerm && (
          <div className="mt-2 max-w-md mx-auto bg-white border rounded-md shadow-md overflow-hidden flex justify-between items-center">
            <div className="py-2 px-4 text-black hover:bg-gray-100" onClick={() => handleSuggestionClick(searchTerm)}>
              {searchTerm}
            </div>
            {isAvailable && <FaShoppingCart className="text-2xl text-gray-500 pr-2" />}
          </div>
        )}
    </>
  );
};

export default DomainSearch;
