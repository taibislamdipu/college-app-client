import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value); // Log the input value to the console
  };

  return (
    <div>
      <div className="py-6">
        <input
          type="text"
          className="border text-secondary w-full border-gray-600 rounded-md p-2 transition focus:border-gray-800"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
