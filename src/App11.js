import React,{useState,useEffect} from "react";

function App(){
const [count, setCount] = useState(0)
useEffect(()=>{console.log('effect0')})
useEffect(()=>{console.log('effect1')})
useEffect(()=>{console.log('effect02')},[count])
    return(
        <div>
            <h1> effect basics</h1>
            <p> count change : {count}</p>
            <p><button onClick ={click}>click</button></p>
        </div>
    )
function click(){
    setCount(count+1)
}

}

export default App