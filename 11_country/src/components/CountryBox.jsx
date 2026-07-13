// src/components/CountryBox.jsx
import React, { useId } from "react";

function CountryBox({
    label,
    selectedCountryId = "",
    onCountryChange,
    countryOptions = [], 
    className = "",
}) {
    const countrySelectId = useId();

    return (
        <div className={`bg-white p-4 rounded-lg text-sm flex flex-col gap-2 ${className}`}>
            <label htmlFor={countrySelectId} className="text-black/40 font-medium">
                {label}
            </label>
            
            <select
                id={countrySelectId}
                className="rounded-lg p-2.5 bg-gray-100 cursor-pointer outline-none w-full text-black font-semibold"
                value={selectedCountryId}
                onChange={(e) => onCountryChange && onCountryChange(Number(e.target.value))}
            >
                <option value="" disabled>Select a Country</option>
                {countryOptions.map((country) => (
                    <option key={country.id} value={country.id}>
                        {country.flag} {country.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CountryBox;