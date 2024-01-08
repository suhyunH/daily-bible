import { bible } from './constants/bible';
import './App.css';
import { useState } from 'react';

function App() {
  const [verse, setVerse] = useState('')
  const [reference, setReference] = useState('')
  const randomNumber = ()=>{
   const num =  Math.floor(Math.random() * 10) + 1;
   setVerse(bible[num].verse)
    setReference(bible[num].reference)
  }
  

  
  return (
    <div className="App">
      <header className="App-header">
        <div className='w-[100vw] h-[100vh] text-center items-center flex flex-col  justify-center'>

        <button className="border-2 rounded-md bg-[#d9d9d9] py-2 px-6 text-lg shadow-sm hover:font-semibold" onClick={randomNumber}>📚오늘의 말씀</button>
        <div className='mt-10 border-2 rounded-md p-10 text-left w-[800px] sm:w-[320px]'>
          <p className='text-2xl font-semibold'>{reference}</p>
          <p className='text-2xl'>{verse}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
