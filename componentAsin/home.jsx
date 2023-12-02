import axios  from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./usercontext";

function Home(){
  const navigate=useNavigate();
  const [auth,setAuth]=useState(false)
  const [message,setMessage]=useState('')
  const {user,setUser}=useContext(UserContext);
  axios.defaults.withCredentials=true;
  
  useEffect(()=>{
    if (user) {
      setAuth(true);
    } else {
      setAuth(false)
    }
  },[user])

  const handledelete=()=>{
    setUser({})
    setAuth(false)
  }

  return(
      <div className="container mt-4">
        {
          auth ?
          <div>
            <h3>Welcome, {user.customer_Name}!</h3>
            <button onClick={handledelete} className="btn btn-danger">Log out</button>
          </div>
          :
          <div>
          <h3>{message}</h3>
          <p onClick={()=>{
          navigate('/login')
          }}>Please log in</p>
            
          </div>
        }
      </div>
  )
}
export default Home; 
