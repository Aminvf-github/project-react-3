import { useEffect, useState } from "react"
import styles from "./Style/main.css";

export const App =()=>{
  const [postList, setpostList] = useState([])
useEffect(()=>{
  const fetchData = async ()=>{
    const apiFetch = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await apiFetch.json()
    setpostList(data)
  }
  fetchData()
},[])
console.log(postList);
  return <>
  <input type="text" id="my-input" placeholder="search monsters" />

  {postList.map((post)=>{
   return <div>
    <img src={post.username} alt="" />
    <b key={post.id}>{post.name}</b>
    <br /><br />
    <p key={post.id}>{post.email}</p>
    </div>
  })}
  
    </> 
}
export default App;