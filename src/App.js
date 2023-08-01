import React,{useState} from 'react'
import './App.css'
import { clear } from '@testing-library/user-event/dist/clear'

const App = () => {

  const[result,setResult]=useState("")
  
  const clickBtn=(event)=>{
    setResult(result.concat(event.target.value))
  }

  const clearDisplay=()=>{
    setResult("")
  }

  const calculate=()=>{
    setResult(eval(result).toString())
  }
  return (
    <div className='calculator'>
      <input type='text' placeholder='0'id='call' value={result}/>
      <input type='button' value='9'className='button'onClick={clickBtn}/>
      <input type='button' value='8'className='button'onClick={clickBtn}/>
      <input type='button' value='7'className='button'onClick={clickBtn}/>
      <input type='button' value='+'className='button'onClick={clickBtn}/>
      <input type='button' value='6'className='button'onClick={clickBtn}/>
      <input type='button' value='5'className='button'onClick={clickBtn}/>
      <input type='button' value='4'className='button'onClick={clickBtn}/>
      <input type='button' value='-'className='button'onClick={clickBtn}/>
      <input type='button' value='3'className='button'onClick={clickBtn}/>
      <input type='button' value='2'className='button'onClick={clickBtn}/>
      <input type='button' value='1'className='button'onClick={clickBtn}/>
      <input type='button' value='*'className='button'onClick={clickBtn}/> 
      <input type='button' value='%'className='button'onClick={clickBtn}/>
      <input type='button' value='/'className='button'onClick={clickBtn}/>
      <input type='button' value='0'className='button'onClick={clickBtn}/>
      <input type='button' value='.'className='button'onClick={clickBtn}/>
     
      <input type='button' value='clear'className='button btn1'onClick={clearDisplay}/>
      <input type='button' value='='className='button btn1'onClick={calculate}/>
      
      
    </div>
  )
}

export default App
