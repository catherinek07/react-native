import React from "react";


function App(props){
    console.log(props.title)
    return(
        <ul>{
            props.title.map((item,index)=>(<li>{item}</li>))
        }</ul>
    )
}//map = jackup baeyul
//filter joggun => true
export default App