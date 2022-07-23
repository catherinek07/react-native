import React,{useState,useEffect} from "react";

function App(){
    const [loading,setLoading] = useState(true)
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((item) => item.json())
        .then((users) => {setUsers(users)
            setLoading(false)}
            )

        },[])
    if(loading){
        console.log('loading')
    }
    return(
        <ul>
            {users.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )

}

export default App