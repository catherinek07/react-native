import React from "react"

class App extends React.Component{
  state = {count:0}
  render() {
    return(
      <div>
        <p>Counter : {this.state.count}</p>
        <p>
          <button
          onClick={()=>{
            this.setState({count:this.state.count + 1})
          }}>Click Me!</button>
        </p>
      </div>
    )
  }
}

export default App