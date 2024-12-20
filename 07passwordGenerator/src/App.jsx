import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] =useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str +="0123456789"
      if(characterAllowed) str += "!@#$%^&*()_+{}[]~`" 

      for( let i=1; i<=length ; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }

      setPassword(pass)

    }
    , [length,numberAllowed,characterAllowed,setPassword]
  )

  const copyPasswordToClipboard = useCallback(() => {
       passwordRef.current?.select()
       passwordRef.current?.setSelectionRange(0,length)
       window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [ length, numberAllowed,
    characterAllowed, passwordGenerator])


  const passwordRef = useRef(null)  
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-900 '> 
      <h1 className='text-4l text-center   bg-zinc-700 w-fit m-auto p-2 px-6 rounded-lg text-orange-200 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-5 mx-5' >
           <input 
           type="text" 
           value={password}
           className='outline-none w-full  py-1 px-3  '
           placeholder='Password'
           readOnly
           ref={passwordRef}
           /> 
           <button
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
           onClick={copyPasswordToClipboard}
           >Copy</button>
           
        </div> 
        <div
        className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label > Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={
              () => {
                setNumberAllowed((prev) => !prev);
              }
            }  
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={characterAllowed}
            id='characterInput'
            onChange={
              () => {
                setCharacterAllowed((prev) => !prev);
              }
            }  
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
