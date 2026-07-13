import countries from "../data/countries.json";

function useCountryInfo(countryName) {

    const country = countries.find(
        (item) =>
            item.name.toLowerCase() === countryName.toLowerCase()
    );

    return country;
}

export default useCountryInfo;