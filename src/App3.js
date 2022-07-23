import React, {useState} from "react";

function App(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <p>{count}</p>
            <p onClick={click}>
                <button>CliCK MEEEE!1!!!!</button>
            </p>
        </div>
    )
function click(){
    setCount(count+2)
}
}
export default App