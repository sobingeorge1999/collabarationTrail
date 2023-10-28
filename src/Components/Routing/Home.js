import React from 'react'
import Navbar from '../Navbar'
import Body from '../Body'

function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <div>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="/Sign">Sign up/Login</a>
          </li>
          
        </ul>
      </div>
      <Body />
    </div>
  )
}

export default Home