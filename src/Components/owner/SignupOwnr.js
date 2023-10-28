import React, { useState } from 'react'


function SignupOwnr() {
    const [data, setdata] = useState({ fname: "", password: "", dob: "", email: "" })
    function stor(a) {
        console.log(a);
        setdata({ ...data, [a.target.name]: a.target.value })
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
                <form>
                    <div class='box'>
                        <div class="input-group mb-4">
                            <input type="text" class="form-control" placeholder="Name" aria-label="name" onChange={stor} name='fname' />
                        </div>
                        <div class="input-group mb-4">
                            <input type="text" class="form-control" placeholder="Password" aria-label="password" onChange={stor} name='password' />
                        </div>
                        <div class="input-group mb-4">
                            <input type="date" class="form-control" aria-label="dob" onChange={stor} name='dob' />
                        </div>
                        <div class="input-group mb-4">
                            <input type="email" class="form-control" placeholder="Email" aria-label="email" onChange={stor} name='email' />
                        </div>
                        <div class="input-group mb-4">
                            <button type="button" class="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default SignupOwnr