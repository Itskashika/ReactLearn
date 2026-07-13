import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  // Stores the length of the password.
  const [length, setLength] = useState(8)

  // Stores whether numbers are allowed.
  const [numberAllow, setnumAllow] = useState(false)

  // Stores whether special characters are allowed.
  const [charAllow, setCharAllow] = useState(false)

  // Stores the generated password.
  const [password, setPassword] = useState("")

  // Creates a reference to the password input field.
  const passwordref = useRef(null)

  // Generates a new password whenever dependencies change.
  const passwordGenerator = useCallback(() => {

    // Stores the generated password.
    let pass = ""

    // Default characters (A-Z, a-z).
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // Adds numbers if checkbox is checked.
    if (numberAllow) str += "123456789"

    // Adds special characters if checkbox is checked.
    if (charAllow) str += "!@#$%^&*-_+=[]{}~"

    // Runs loop according to selected password length.
    for (let i = 1; i <= length; i++) {

      // Picks a random index from the character string.
      let char = Math.floor(Math.random() * str.length)

      // Adds the selected character to the password.
      pass += str.charAt(char)
    }

    // Updates the password state.
    setPassword(pass)

  }, [length, numberAllow, charAllow])

  // Copies the generated password to the clipboard.
  const copyPasswordtoClipboard = useCallback(() => {

    // Selects the text inside the input field.
    passwordref.current?.select()

    // Selects the full password text.
    passwordref.current?.setSelectionRange(0, 15)

    // Copies the password to the clipboard.
    window.navigator.clipboard.writeText(password)

  }, [password])

  // Automatically generates a new password whenever settings change.
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      {/* Main container */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-fuchsia-800 text-white'>

        {/* Heading */}
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        {/* Password input and copy button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-fuchsia-600">

          {/* Displays generated password */}
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref}
          />

          {/* Copies password when clicked */}
          <button
            onClick={copyPasswordtoClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-1 rounded-r-md shrink-0 hover:bg-blue-800 hover:scale-105 transition duration-300 ease-in-out"
          >
            Copy
          </button>
        </div>

        {/* Controls section */}
        <div className='flex text-sm gap-x-2'>

          {/* Password length slider */}
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          {/* Numbers checkbox */}
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numberAllow}
              id="numberInput"
              onChange={() => setnumAllow(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Special characters checkbox */}
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={charAllow}
              id="charInput"
              onChange={() => setCharAllow(prev => !prev)}
            />
            <label htmlFor="charInput">Special Character</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App