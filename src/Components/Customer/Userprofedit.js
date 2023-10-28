import React from 'react'

function Userprofedit() {
  return (
      <div>
          <div class="mb-4 header">
              <h2 style={{ textAlign: 'center' }}>Edit Profile</h2>
          </div>
          <div class="box">

              <div class="container text-left">
                  <div class="row">
                      <div class="col">
                          Name
                      </div>
                      <div class="input-group mb-4 col">
                          <input type="text" class="form-control" aria-label="name" name='fname' />
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                          Email
                      </div>
                      <div class="input-group mb-4 col">
                          <input type="email" class="form-control" aria-label="email" name='email' />
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                          Phone Number
                      </div>
                      <div class="input-group mb-4 col">
                          <input type="number" class="form-control"  name='number' />
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                          Address
                      </div>
                      <div class="input-group mb-4 form-floating col">
                          {/* <label class="form-control"></label> */}
                          <textarea class="form-control" placeholder="Address" id="floatingTextarea2" style={{ height: "100px" }}
                              name='address'></textarea>
                          <label for="floatingTextarea2"></label>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                          Pincode
                      </div>
                      <div class="input-group mb-4 col">
                          <input type="number" class="form-control" name='pinnum' />
                      </div>
                  </div>
              </div>

              <div class="input-group mb-4 button-center">
                  <button type="submit" class="btn btn-success">Save</button>
              </div>

          </div>
      </div>
  )
}

export default Userprofedit