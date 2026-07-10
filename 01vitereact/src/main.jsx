import React from 'react' 
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>This is my own app function</h1>
    </div>
  )
}

// A custom JavaScript object that looks similar to a React element,
// but it is NOT a real React element.
/*
const reactElementcust= {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: "_blank"
  },
  children: 'click me to visit google'
}*/

// JSX is compiled by Babel into a real React element.
// This object has a special structure that React understands.
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
)
const reactElementmy=React.createElement(
  'a',
  {href: 'https://google.com' , target: "_blank"},
  'click to vist gOOOGLEEEE'
)

createRoot(document.getElementById('root')).render(

  // <MyApp />
  // React calls the MyApp function.
  // The JSX returned by MyApp is converted into React elements
  // (using React.createElement or the new JSX runtime).
  // React then renders those elements to the DOM.

  // reactElementcust
  // ❌ This will NOT work because it is just a custom object.
  // Although it looks similar to a React element, it is missing
  // the internal properties (like $$typeof) that React expects.

  //anotherElement
  // ✅ This works because JSX is transformed into a genuine
  // React element object that ReactDOM.render() understands.

 //reactElementmy
 <App/>
) 