import React from 'react'

function WorkshopLogin() {
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
              <h2 style={{ textAlign: 'center' }}>Workshop Login</h2>
          </div>
          <div class='box'>
              <div class="input-group mb-4">
                  <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
              </div>
              <div class="input-group mb-4">
                  <input type="text" class="form-control" placeholder="Password" aria-label="Username" />
              </div>
              <div class="">
                  <a style={{ float: 'right' }} href="https://pluralsight.com">forget password ?</a><br />
                  <a style={{ float: 'right' }} href="/Signup">New user ?</a>
              </div>
              <div class="input-group mb-4 button-center">
                  <button type="button" class="btn btn-success">Login</button>
              </div>
          </div>

      </div>
  )
}

export default WorkshopLogin