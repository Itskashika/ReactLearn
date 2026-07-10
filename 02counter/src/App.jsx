import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
//counter and setCounter is variable name
 let [counter,setCounter]= useState(5)

  //let counter = 5;
  const addValue=()=>{
    console.log("value added",counter);
   counter=counter+1;
    if(counter>20){
      throw alert("Bro plz keep it till 20!")
    }
    setCounter(counter)
    //here below all go in batch so although they are 4 but 
    // they will increment only one 
    // setCounter(counter+1)
    //  setCounter(counter+1)
    //   setCounter(counter+1)
    //    setCounter(counter+1)
    //to increement no by 4 we nee to pass like below
    //  so this will take previous value and then make update
    // setCounter((prevcounter => prevcounter+1))
    // setCounter((prevcounter => prevcounter+1))
    // setCounter((prevcounter => prevcounter+1))
  }
  const removeValue=()=>{
    counter=counter-1;
    if(counter<0){
     throw alert("बस भाई 0 तक ही ले जा सकता है तू !")
    }
    setCounter(counter)
  }
  return (
  
    <>
     <h1> Project counter</h1>
     <h2> Counter value: {counter}</h2>
     <button 
     onClick={addValue}
      >Add Value</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
