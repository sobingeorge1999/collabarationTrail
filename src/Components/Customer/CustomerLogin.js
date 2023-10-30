import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CustomerLogin() {

    const [data,setData]=useState({username:"" ,password:""});
    const navigate =useNavigate();

    const stor =(a) => {
        console.log(a);
        setData({...data, [a.target.name]:a.target.value})
    }

    const reg =(b) => {
        b.preventDefault();
        axios.post("http://localhost:4000/loguser",data)
        .then((response)=>{
            console.log(response);
            if(response.data.status==200){
                alert("Login Successfully")
                navigate('/Userdashboard')
            }else if(response.data.status==500){
                alert("Password didnt' match")
            } else if (response.data.status == 300){
                alert("User not found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
        
    }

    return (
        <div>
            <div>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                </ul>
            </div>
            <div class="mb-4 header">
                <h2 style={{ textAlign: 'center' }}>Customer Login</h2>
            </div>

            <form onSubmit={reg}>
            <div class='box'>
                <div class="input-group mb-4">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Username" 
                    aria-label="Username" 
                    name='username'
                    onChange={stor}
                    />
                </div>
                <div class="input-group mb-4">
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Password" 
                    aria-label="Username" 
                    name='password'
                    onChange={stor}
                    />
                </div>
                <div class="">
                    <a style={{ float: 'right' }} href="/Forgetpass">forget password ?</a><br />
                    <a style={{ float: 'right' }} href="/Signupcustmr">New user ?</a>
                </div>
                <div class="input-group mb-4 button-center">
                    <button type="submit" class="btn btn-success">Login</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default CustomerLogin