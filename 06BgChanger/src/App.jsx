import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-150 "
         style = {{backgroundColor:color}}
      >  
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-slate-500 w-fit m-auto rounded-full px-0 gap-1">
           <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-1 py-1 rounded-full">
           <button className="outline-none px-5 py-2 rounded-full"
           style={{backgroundColor:'red'}}
           onClick={() => setColor("red")}
           > Red</button>
            </div> 
            <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-1 py-1 rounded-full">
           <button className="outline-none px-5 py-2 rounded-full"
           style={{backgroundColor:'yellow'}}
           onClick={() => setColor("yellow")}
           > Yellow</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-1 py-1 rounded-full">
           <button className="outline-none px-5 py-2 rounded-full"
           style={{backgroundColor:'lightgreen'}}
           onClick={() => setColor("lightgreen")}
           > Green</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-1 py-1 rounded-full">
           <button className="outline-none px-5 py-2 rounded-full"
           style={{backgroundColor:'orange'}}
           onClick={() => setColor("orange")}
           > Orange</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-1 py-1 rounded-full">
           <button className="outline-none px-5 py-2 rounded-full"
           style={{backgroundColor:'pink'}}
           onClick={() => setColor("pink")}
           > Pink</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-1 py-1 rounded-full">
           <button className="outline-none px-5 py-2 rounded-full"
           style={{backgroundColor:'skyblue'}}
           onClick={() => setColor("skyblue")}
           > Blue</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-1 py-1 rounded-full">
           <button className="outline-none px-5 py-2 rounded-full"
           style={{backgroundColor:'white'}}
           onClick={() => setColor("white")}
           > White</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-1 py-1 rounded-full">
           <button className="outline-none px-5 py-2 rounded-full text-white"
           style={{backgroundColor:'black'}}
           onClick={() => setColor("black")}
           > Black</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-1 py-1 rounded-full">
           <button className="outline-none px-5 py-2 rounded-full"
           style={{backgroundColor:'purple'}}
           onClick={() => setColor("purple")}
           > Purple</button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-1 py-1 rounded-full">
           <button className="outline-none px-5 py-2 rounded-full"
           style={{backgroundColor:'magenta'}}
           onClick={() => setColor("magenta")}
           > magenta</button>
            </div>
            
      </div> 
      </div>
    </>
  )
}

export default App
