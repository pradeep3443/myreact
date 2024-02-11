import './App.css';
import { useState , useEffect } from 'react';
 
function GithubUser({data , location}){
    return (
        <div>
            <h1>{data}</h1>
            <h1>{location}</h1>
        </div>
    )
}

function Form(){
    const [data , setData] = useState(null);

    useEffect(()=>{
        fetch('https://api.github.com/users/moonhighway')
        .then((response) => response.json())
        .then(setData)
    },[]);

    if(data){
        return(
           <GithubUser data ={data.type} location={data.location}/>
        )
    }
   
    return (
        <h1>Data</h1>
    );
}


function App() {

 return (

    <Form/>
   
 )
}

export default App;
