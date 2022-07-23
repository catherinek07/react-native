import React from "react";

const allColor =['red','blue','yellow','orange','violet']


function App(props){
    function optionColor(){
        const colors = allColor;
        return colors.map((item,index)=>{
            return( <option value={item} key={index}>{item}</option>
            )
        })
    }
    console.log(props.title)
    return(
        <p>
            <label htmlFor="color">color</label>
            <select id="color">
                {optionColor()}
            </select>
        </p>
    )
    }
export default App