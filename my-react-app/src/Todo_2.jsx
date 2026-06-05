import React, { useReducer } from 'react'

const Todo = () => {
    let intialData={
        input:"",
        todos:[]
    }
    function reducer(state,action){
        if(action.type=="set_input"){
            return{
                ...state,input:action.payload
            }
        }else if(action.type=="add_TODO"){
            return{
                input:"",
                todos:[...state.todos,state.input]
            }
        }

    }
  let [state,disptach]= useReducer(reducer,intialData)
  return (
    <div>
        <input onChange={(e)=>disptach({type:"set_input",payload:e.target.value})}/>
        <button onClick={()=>disptach({type:"add_TODO"})}>add</button>
        {
            state.todos.map((a)=>{
                return(<>
                <h2>{a}</h2>
                </>)
            })
        }
    </div>
  )
}

export default Todo