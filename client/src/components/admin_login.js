import { react,useState,useEffect } from "react"
import "../css/adminlog.css"
import axios from "axios"



 const AdminLogin = () =>{
   
    const [formData, setData] = useState({
        name: '',
        password: ''
      });
    
     
    const handleForm = (event) => {
        const { name, value } = event.target;
        setData({
          ...formData,
          [name]: value
        });
    };

    const handleData = () =>{
        try{

        const data = axios.post("http://localhost:5000/admin_login",formData)

        if(data){
            console.log("logged in")
        }
      }
      catch(e){
        console.log(e)
      }

    }



    return (
        <>


<div class="container">
        <form  onSubmit={(e)=>{e.preventDefault()}} method="POST">
            <h2>Admin Login</h2>
            <div class="input-container">
                <label for="username">Username</label>
                <input onChange={handleForm} type="text" id="username" name="name" required></input>
            </div>
            <div class="input-container">
                <label for="password">Password</label>
                <input onChange={handleForm} type="password" id="password" name="password" required></input>
            </div>
            <button onClick={handleData} className="login" type="submit">Login</button>
        </form>
</div>

         
        </>
    )


}

export default AdminLogin;