import React from 'react'

function Signmech() {
  return (
    <div class='box'>
        <div class="input-group mb-4">
        <input type="text" class="form-control" placeholder="Name" aria-label="name"/>
        </div>
        <div class="input-group mb-4">
        <input type="text" class="form-control" placeholder="Password" aria-label="Username"/>
        </div>
        <div class="input-group mb-4">
        <input type="date" class="form-control"  aria-label="dob"/>
        </div>
        <div class="input-group mb-4">
        <input type="email" class="form-control" placeholder="Email" aria-label="email"/>
        </div>
        <div class="input-group mb-4">
        <button type="button" class="btn btn-success">Submit</button>
        </div>
    </div>
  )
}

export default Signmech