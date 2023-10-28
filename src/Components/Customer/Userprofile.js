import React from 'react'

function Userprofile() {
  return (
    <div>
        <div class="mb-4 header">
            <h2 style={{ textAlign: 'center' }}>Profile</h2>
        </div>
        <div class="box">

        <div class="container text-left">
          <div class="row">
            <div class="col">
              Name
            </div>
            <div class="col">
              <p>Amal</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Email
            </div>
            <div class="col">
              <p>amal@123</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Phone Number
            </div>
            <div class="col">
              <p>945645</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Address
            </div>
            <div class="col">
              <p>Adress address address</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Pincode
            </div>
            <div class="col">
              <p>695503</p>
            </div>
          </div>
        </div>

        <div class="input-group mb-4 button-center">
          <button type="submit" class="btn btn-success">Edit</button>
        </div>

        </div>
    </div>
  )
}

export default Userprofile