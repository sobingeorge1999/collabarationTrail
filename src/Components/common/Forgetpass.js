import React from 'react'

function Forgetpass() {
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
              <h2 style={{ textAlign: 'center' }}>Forget password</h2>
          </div>
          <div class='box'>
              <div class="input-group mb-4">
                  <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
              </div>
              <div class="input-group mb-4">
                  <input type="text" class="form-control" placeholder="Email" aria-label="Email" />
              </div>
              <div class="input-group mb-4 button-center">
                  <button type="button" class="btn btn-success">Submit</button>
              </div>
          </div>
    </div>
  )
}

export default Forgetpass