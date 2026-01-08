import React, { useEffect } from 'react'
import { use } from 'react';
import { useState , useCallback, useRef} from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*+={}[]~-_"
     for (let i = 0; i < length; i++) {
    let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
     }
     setPassword(pass)
},[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard= useCallback (()=>{
  window.navigator.clipboard.writeText(password)
},[password])
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])


return (
  <div className="w-screen h-screen flex justify-center items-center bg-black">
    <div className="w-full max-w-md shadow-lg rounded-lg px-6 py-6 bg-gray-700">
      
      <h3 className="text-white text-center text-2xl mb-4">
        Password Generator
      </h3>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 bg-white text-gray-900 "
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className="bg-orange-500 text-white px-4">
          copy
        </button>
      </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'  >
    <input
      type='range'
      min = {6}
      max = {100}
      value= {length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
    />
<label> Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1' >
      <input
        type='checkbox'
        defaultChecked = {numberAllowed}
        id = "numberInput"
        onChange={()=>{
          setNumberAllowed((prev)=> !prev);
        }}
      />
      <label htmlFor='numberInput'>Numbers</label>
    </div>
     <div className='flex items-center gap-x-1' >
      <input
        type='checkbox'
        defaultChecked = {charAllowed}
        id = "characterInput"
        onChange={()=>{
          setCharAllowed((prev)=> !prev);
        }}
      />
      <label htmlFor='characterInput'>Character</label>
    </div>
     </div>
    </div>
   
  </div>
)


}

export default App
// import React, { useState, useCallback, useEffect } from 'react'

// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*+={}[]~-_"

//     for (let i = 0; i < length; i++) {
//       const charIndex = Math.floor(Math.random() * str.length)
//       pass += str.charAt(charIndex)
//     }

//     setPassword(pass)
//   }, [length, numberAllowed, charAllowed])

//   // Auto-generate when options change
//   useEffect(() => {
//     passwordGenerator()
//   }, [passwordGenerator])

//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
//         <div className='flex shadow rounded-lg overflow-hidden mb-4'>
//           <input
//             type='text'
//             value={password}
//             className='outline-none w-full py-1 px-3'
//             placeholder='password'
//             readOnly
//           />
//         </div>

//         <button
//           onClick={passwordGenerator}
//           className='bg-orange-500 text-white px-3 py-1 rounded'
//         >
//           Generate
//         </button>
//       </div>
//     </>
//   )
// }

// export default App
