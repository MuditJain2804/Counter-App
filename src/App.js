import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function decrementHandler(){
    setCount(count-1);
  }
  function incrementHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className='app'>
      <div className='text'>Increment & Decrement</div>
      <Stack direction="row" spacing={0.15} >
        <Button variant='contained' color='inherit' onClick={decrementHandler}>-</Button>
        <Button variant='contained' color='inherit'>{count}</Button>
        <Button variant='contained' color='inherit' onClick={incrementHandler}>+</Button>
      </Stack>
      <Button variant='contained' onClick={resetHandler}>Reset</Button>
    </div>
  );
}

export default App;
