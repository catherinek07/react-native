import React from "react";

function App(){
function handleSubmit(e){
e.preventDefault();
console.log('SUBMIT SUCCESS!')
}

    return(
        <form>
            <button type="submit">SUBMITT</button>
        </form>
    )
    }
export default App