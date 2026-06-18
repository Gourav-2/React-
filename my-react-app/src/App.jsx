// import { useState } from "react"

import { useEffect } from "react"
import { useState } from "react"

// import { useState } from "react"
// import Home from "./Home"

// const App = () => {
//        let [count,SetCount]=    useState(0)
//   function fun1(){
//     SetCount(count+1)

//   }
//   return (
//     <div>
//       <h3>{count}</h3>
//        <button onClick={fun1}>click</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// const App = () => {
//        let [color,SetColor]=     useState("red")
//        function fun1(){
//         SetColor("green")
//        }
//   return (
//     <div style={{backgroundColor:color,height:"100vh"}}>
//       <button  onClick={fun1}>red</button>
//     </div>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }
// const Home = () => {
//   return (
//     <div>Helllooo</div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//     <Home/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'
// import {New}  from './Home'
// const App = () => {
//   return (
//     <div>
//     <Home/>
//     <New/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'

//  // App->Home->A->B->C

// const App = () => {
//   let user="ankittt"
//   return (
//     <div><Home  data={user}/></div>
//   )
// }

// export default App



// const App = () => {
//   // let count=0
//       let [count,SetCount]=    useState(0)
//       function fun1(){
//         SetCount(count+1)
//         // count++
//       }

//   return (
//     <div>
//       <h4>{count}</h4>
//       <button onClick={fun1}>click</button>
//       <Home/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import New from "./New"
// import {About} from './New'

// const App = () => {
//   return (
//     <div>
//       <New/>
//       <About/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'
// const App = () => {
//   let data="hello"
//   return (
//     <div>
//       <Home a={data}/>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Home from './Home'

// const App = () => {
//   // let count=0
//   let [count,SetCount]=   useState(0)
  
//   function fun1(){
//     SetCount(count+1)
  
//   }
//   function fun2(){
//     SetCount(count-1)
  
//   }
//   function fun3(){
//     SetCount(0)
  
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={fun1}>++</button>
//       <button onClick={fun2}>--</button>
//       <button onClick={fun3}>reset</button>


   
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// const App = () => {
//             let [input,SetInput]=     useState("")
//             let [data,SetData]=     useState('')
//   function fun1(e){
//     // console.log(e.target.value);
//     SetInput(e.target.value) 
//   }
//   function done(){
//     SetData(input)

//   }
//   return (
//     <div>
//       <h2>{data}</h2>
//       <input type='text' name='input'  placeholder='Enter your name' onChange={fun1}/>
//       <button onClick={done}>click</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//             let [input,SetInput]=      useState("")
//             let [data,SetData]=      useState("")
//   function fun1(e){
//     // console.log(e.target.type);
//     SetInput(e.target.value) 
//   }
//   function done(){
//     SetData(input)
//     SetInput("")

//   }
//   return (
//     <div>
//       <h2>{data}</h2>
//       <input   type='text'  name='input'  value={input}  onChange={fun1}/>
//       <button onClick={done}>click</button>
//       {/* <input type='email'/> */}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App





// import './App.css'
// const App = () => {
//       let [ApiData,SetApiData]=    useState([])
//       useEffect(()=>{
//               //  console.log("hello"); 
//               async  function call(){
//                 let res=  await  fetch("https://dummyjson.com/products")
//                 let data=        await   res.json()
//                 console.log(data.products);
//                 SetApiData(data.products)
//               }
//               call()
//       },[])
      
//   return (
//     <div id="parent_div"   className="">
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Task from "./Task"

// const App = () => {
//   return (
//     <div>
//       <Task/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import NavBar from "./NavBar"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Task from "./Task"
// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route    path="/"   element={<Home/>}/>
//         <Route    path="/about"   element={<About/>}/>
//         <Route    path="/task"   element={<Task/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

// http://localhost:5173/



// google.com/insta/userID



// import React from 'react'
// import NavBar from "./NavBar"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Task from "./Task"
// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//          <Route  path="/"  element={<Home/>}/>
//          <Route  path="/about"  element={<About/>}/>
//          <Route  path="/task"  element={<Task/>}/>


//       </Routes>
//     </div>
//   )
// }

// export default App

// // google.com/whatApp/userID
// // localhost:5173/about


// import React from 'react'
// import Todo from "./Todo"

// const App = () => {
//   return (
//     <div><Todo/></div>
//   )
// }

// export default App


// import React from 'react'
// import Home from "./Home"

// //main-> app-> A-> b-> C



// import NavBar from "./NavBar"

// import { Route, Routes } from "react-router-dom"
// import Cart from "./Cart"

// const App = () => {
//   let [apiData,SetApiData] =   useState([])
//   let [cart,SetCart]= useState([])
//   return (

//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Home apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
//         <Route path="/cart" element={<Cart cart={cart}/>}/>

//       </Routes>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Todo from "./Todo_3"
// import Todo_3 from "./Todo_3"

// const App = () => {
//   return (
//     <div>

//   <Todo_3/>

//     </div>
//   )
// }

// export default App



// import React from 'react'
// // import Todo from './Todo'
// // import Home from './Home'
// import Tap_change from "./Tap_change"

// const App = () => {
//   return (
//     <div>
//       <Tap_change/>
     

      
        
      
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import useCounter from "./useCounter"
// import './App.css'

// const App = () => {
//      let{count,inc,dec,reset}=useCounter(0)
//     //  console.log("he");
//     //  let res=0
//     //  function cal(){
//     //   for(let i=0;i<1;i++){
//     //     res=i
//     //   }
//     //   return res
//     //  }
//     //  let total=cal()
//   return (
  
//     <div id="one">
      
//       <h2>{count}</h2>
//       <button onClick={inc}>+</button>
//       <button onClick={dec}>-</button>
//       <button onClick={reset}>RESET</button>


//     </div>
//   )
// }

// export default App

// -------------------------------counter-----------------

// import React from 'react'
// import A from "./A"

// const App = () => {
//   return (
//     <div>
//       <A/>
      
//     </div>
//   )
// }

// export default App


// -------------------
//-

// import React from 'react'
// import NavBar from "./Navbar"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Home";

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//         <Routes> 
//           <Route path="/"element={<Home/>}/>
//           <Route path="/Home"element={Home}/>
//         </Routes>

//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App



// import React from 'react'
// import { useParams } from 'react-router-dom'

// const UserProfile = () => {
//     let list=['A','B','C','D']


//      let {id}=  useParams()
//     let data= list.find((_,index)=>{
//         return id==index
//      })

//   return (
//     <div>{data}</div>
//   )
// }

// export default UserProfile


// import React from 'react'

// const App = () => {
//   // console.log(Array.prototype);
//   // console.log(Object.prototype);
//   // console.log(String.prototype);
//   // console.log("hello");
//   // console.log("hello");
// //create a custom function

//   Array.prototype.gourav=function(cd){//custom copy of map function
//     let res=[]
//     for(let i=0;i<this.length;i++){
//       res.push(cd(this[i],i,this))
//     }
//   return res
//   }







//   let arr=[1,2,3,5,6,8]
//   let data=arr.gourav((a,b,c)=>{
//     return a
//   })
//  console.log(data);
 


//   return (
//     <div>App

//     </div>
//   )
  
  
// }

// export default App