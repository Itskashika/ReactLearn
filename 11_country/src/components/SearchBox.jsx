import { useState } from "react";

function SearchBox({ onSearch }) {
  const [country, setCountry] = useState("");

 
   const handleSearch = () => {
    if (country.trim() !== "") {
      onSearch(country);
    }
  };

  return (
    <div className="flex gap-3">

      <input
        type="text"
        placeholder="Enter country name..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={handleSearch}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-lg transition"
      >
        Search
      </button>

    </div>
  );
}

export default SearchBox;