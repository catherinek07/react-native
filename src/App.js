import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

function App(){
    const [a, setA] = useState({value:''})
    return(
        <form onSubmit = {handleSubmit}>
            <p>
                <label>Name: </label>
                <input type="text" value={a.value} onChange={handleChange}></input>
            </p>
            <p><input type="submit" value="Submit" /></p>
        </form>
    )
    function handleChange(e){
        console.log(e.target.value)
        setA({value: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        alert('value: '+ a.value)
    }
    }
export default App