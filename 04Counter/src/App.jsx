import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  
  const addvalue = () => {
    console.log("added")
    //counter+=1
    setCounter(counter+1)
  }
 
  const subtractvalue = () => {
    console.log("subtracted")
    // counter-=1
    if(counter<=0){
      counter = 0
    }
    else{
    setCounter(counter-1)
    }
  }

  return (
    <>
      
      <h1> React !</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add Value </button>
      <button onClick={subtractvalue}> Subtract value</button>
    </>
  )
}

export default App
