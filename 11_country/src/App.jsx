import { useState } from "react";
import SearchBox from "./components/SearchBox";
import useCountryInfo from "./hooks/useCountryInfo";

function App() {
  // Stores the searched country name
  const [country, setCountry] = useState("");

  // Gets country information using the custom hook
  const countryInfo = useCountryInfo(country);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center p-5">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-indigo-700">
          🌍 Country Information
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Search any country to view its details
        </p>

        {/* Search Box */}
        <SearchBox onSearch={setCountry} />

        {/* Country Details */}
        <div className="mt-8">

          {country === "" ? (
            <div className="text-center text-gray-500">
              Enter a country name and click Search.
            </div>
          ) : countryInfo ? (

            <div className="bg-gray-100 rounded-xl p-6 shadow-md">

              {/* Flag */}
              <div className="flex justify-center mb-6">
                <img
                  src={countryInfo.flag}
                  alt={countryInfo.name}
                  className="w-40 h-28 object-cover rounded-lg border shadow"
                />
              </div>

              {/* Country Name */}
              <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
                {countryInfo.name}
              </h2>

              <div className="space-y-3 text-lg">

                <p>
                  <span className="font-semibold">🏙 Capital:</span>{" "}
                  {countryInfo.capital}
                </p>

                <p>
                  <span className="font-semibold">🌎 Region:</span>{" "}
                  {countryInfo.region}
                </p>

                <p>
                  <span className="font-semibold">👨‍👩‍👧 Population:</span>{" "}
                  {countryInfo.population}
                </p>

                <p>
                  <span className="font-semibold">💰 Currency:</span>{" "}
                  {countryInfo.currency}
                </p>

                <p>
                  <span className="font-semibold">🗣 Language:</span>{" "}
                  {countryInfo.language}
                </p>

              </div>

            </div>

          ) : (

            <div className="text-center text-red-600 font-semibold">
              ❌ Country not found
            </div>

          )}

        </div>

      </div>
    </div>
  );
}

export default App;