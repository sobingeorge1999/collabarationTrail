import React from 'react'

function Sign() {
  return (
    <div>
      <div class="row log">

        <div class="card text-center mb-3 col" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">Customer</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="CustomerLogin" class="btn btn-primary">Login</a>
            <a href="#" class="btn btn-primary">Sign Up</a>
          </div>
        </div>

        <div class="card text-center mb-3 col" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">Workshop</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="WorkshopLogin" class="btn btn-primary">Login</a>
            <a href="#" class="btn btn-primary">Sign Up</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sign