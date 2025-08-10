import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import ListView from './components/ListView';

function App(){
   const [list, setList] = useState(() => {
        const savedList = localStorage.getItem("numbers");
        return savedList ? JSON.parse(savedList) : [];
});

useEffect(() => {
    localStorage.setItem("numbers", JSON.stringify(list));
},[list]);

const addNumber = (num) => {
  setList(prev =>(prev.includes(num)?prev : [...prev,num]));
};
const clearList =()=>setList([]);

return(
  <div className="max-w-md mx-auto p-4">
    <Counter onAdd={addNumber}/>
    <ListView items={list} onClear={clearList}/>
  </div>
);
}


export default App;
