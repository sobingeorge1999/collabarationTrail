import React, { useState } from 'react'
import axios from 'axios';

function AddMech() {
    const [data, setdata] = useState({ fname: "", password: "", dob: "", email: "" })
    // const [image,setImage] = useState()
    function stor(a) {
        console.log(a);
        setdata({ ...data, [a.target.name]: a.target.value })
    }


    // const handleChange = (e) => {
    //     console.log(e.target.files);
    //     const data = new FileReader()
    //     data.addEventListener('load', ()=>{
    //         setImage(data.result)
    //     })
    //     data.readAsDataURL(e.target.files[0])
    // }
    // console.log(image);

    const reg = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/addmechanic' ,data)
        .then((a)=> {
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
                  <h2 style={{ textAlign: 'center' }}>Add Mechanic</h2>
              </div>
              <form onSubmit={reg}>
                  <div class='box'>

                      <div class="input-group mb-4">
                          <input type="text" class="form-control" placeholder="Name" aria-label="name" onChange={stor} 
                          name='fname' />
                      </div>
                      <div class="input-group mb-4">
                          <input type="email" class="form-control" placeholder="Email" aria-label="email" onChange={stor} 
                          name='email' />
                      </div>                     
                      <div class="input-group mb-4">
                          <input type="number" class="form-control" placeholder="Phone Number" onChange={stor} 
                          name='number' />
                      </div>
                      <div class="input-group mb-4 form-floating">
                          {/* <label class="form-control"></label> */}
                          <textarea class="form-control" placeholder="Address" onChange={stor} id="floatingTextarea2" style={{height: "100px"}} 
                          name='address'></textarea>
                          <label for="floatingTextarea2">Address</label>
                      </div>
                      <div class="input-group mb-4">
                          <label class="form-control">Pincode</label>
                          <input type="number" class="form-control" placeholder="" onChange={stor} 
                          name='pinnum' />
                      </div>
                      <div>
                          <select class="input-group mb-4 form-select" aria-label="Default select example" onChange={stor} name="category">
                          <option selected>Category</option>
                          <option value="1">Electrical work</option>
                          <option value="2">Mechanical work</option>
                          <option value="3">Body work</option>
                      </select>
                      </div>
                      <div class="input-group mb-4">
                          <input type="text" class="form-control" placeholder="Password" aria-label="password" onChange={stor} 
                          name='password' />
                      </div>
                      <label class="mb-2">Upload photo</label>
                      <div class="input-group mb-4">
                          {/* <label for="formFile" class="form-label">Upload photo</label> */}
                          <input class="form-control" 
                          type="file" 
                          id="formFile" 
                          name="picture" 
                        //   onChange={handleChange}
                        />
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

export default AddMech

