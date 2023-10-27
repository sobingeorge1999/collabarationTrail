import React, { useState } from 'react'
import axios from 'axios';


function Signupcustmr() {
    const [data, setdata] = useState({ fname: "", password: "",confirmpassword:"", email: "",number:"" })
    function stor(a) {
        console.log(a);
        setdata({ ...data, [a.target.name]: a.target.value })
    }
    const reg = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/usersignup',data)
        .then((a)=>{
            console.log(a);
        })
        .catch((error)=>{
            console.log(error);
        })

        console.log(data)
    }
    console.log(data);
    return (
        <div>
            <div>
                <div>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                    </ul>
                </div>
                <div class="mb-4 header">
                    <h2 style={{ textAlign: 'center' }}>Customer Signup</h2>
                </div>
                <form onSubmit={reg}>
                    <div class='box'>

                        <div class="input-group mb-4">
                            <input type="text" class="form-control" placeholder="Name" aria-label="name" onChange={stor} name='fname' />
                        </div>
                        <div class="input-group mb-4">
                            <input type="text" class="form-control" placeholder="Password" aria-label="password" onChange={stor} name='password' />
                        </div>
                        <div class="input-group mb-4">
                            <input type="text" class="form-control" placeholder="Confirm Password" aria-label="confirm-password" onChange={stor} name='confirmpassword' />
                        </div>
                        <div class="input-group mb-4">
                            <input type="email" class="form-control" placeholder="Email" aria-label="email" onChange={stor} name='email' />
                        </div>
                        <div class="input-group mb-4">
                            <input type="number" class="form-control" placeholder="Phone number" onChange={stor} name='number' />
                        </div>
                        <div class="input-group mb-4 button-center">
                            <button type="submit" class="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default Signupcustmr