import React, { useState } from 'react'
import './App.css'
const A = () => {
let[count,Setcount]=useState(0)
function fun1(){
    Setcount(count+1)
}
function fun2(){
    Setcount(count-1)
}
function fun3(){
    Setcount(0)
}

  return (
    <div id ="one">
        <h1>hello</h1>
        <h2>{count}</h2>
        <button onClick={fun1}>ADD</button>
        <button onClick={fun2}>DEC</button>
        <button onClick={fun3}>RESET</button>
    

    </div>
  ) 
}

export default A