import React from "react";

const allSize = (function(min,max){
    let size = []
    for(let i = min; i <= max; i++){
        size.push(i)
        size.push(i+0.5)
    }
    return size
})(7,12)

function App(props){
    function optionSize(){
        const sizes = allSize;

        return sizes.map((item,index)=>{
            return( <option value={item} key={index}>{item}</option>)
        })
    }
    return(
        <p>
            <label htmlFor="size">size</label>
            <select id="size">
                {optionSize()}
            </select>
        </p>
    )
    }
export default App