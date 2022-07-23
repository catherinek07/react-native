import React from "react";

function White(){
    return(
        <p>WHITE</p>
    )
}

function Black(){
    return(
        <p>BLACK</p>
    )

}

function App(props){
    return(
        props.title === true ? <White /> : <Black />
    )
    }
export default App