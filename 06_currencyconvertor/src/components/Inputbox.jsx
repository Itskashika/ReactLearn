// Import React and the useId hook
import React, { useId } from "react";

// Reusable InputBox component
function InputBox({

    // Label shown above the amount input
    label,

    // Current amount value
    amount,

    // Function to update amount in parent component
    onAmountChange,

    // Function to update selected currency in parent component
    onCurrencyChange,

    // Array containing all available currencies
    currencyOptions = [],

    // Default selected currency
    selectCurrency = "usd",

    // Disable amount input if true
    amountDisable = false,

    // Disable currency dropdown if true
    currencyDisable = false,

    // Extra Tailwind classes passed from parent
    className = "",
}) {
   

    // Generates a unique id (mainly useful for connecting label and input)
    const amountInputId = useId();

    return (

        // Main container with Tailwind styling
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            {/* Left section for amount input */}
            <div className="w-1/2">

                {/* Displays the label (e.g., From or To) */}
                <label
                    htmlFor={amountInputId}
                    className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>

                {/* Input box for entering amount */}
                <input

                    // Connects input with label
                    id={amountInputId}

                    // Tailwind styling
                    className="outline-none w-full bg-transparent py-1.5"

                    // Only numbers are allowed
                    type="number"

                    // Placeholder text
                    placeholder="Amount"

                    // Disable input if amountDisable is true
                    disabled={amountDisable}

                    // Controlled input value
                    value={amount}

                   
                   //Runs whenever the input value changes and converts the entered value from a string to a number.
// Calls the parent component's function (onamountChange) to update the amount state.
                    onChange={(e) => onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Right section for currency selection */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">

                {/* Heading for dropdown */}
                <p className="text-black/40 mb-2 w-full">
                    Currency Type
                </p>

                {/* Dropdown menu */}
                <select

                    // Tailwind styling
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"

                    // Currently selected currency
                    value={selectCurrency}

                    // Call parent function when currency changes
                    onChange={(e) =>
                        onCurrencyChange &&
                        onCurrencyChange(e.target.value)
                    }

                    // Disable dropdown if currencyDisable is true
                    disabled={currencyDisable}
                >

                    {/* Create one option for every currency */}
                    {currencyOptions.map((currency) => (

                        // Each option needs a unique key
                        <option
                            key={currency}
                            value={currency}
                        >
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

// Export component so it can be used in other files
export default InputBox;