import axios from 'axios';
import useParams from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function Viewmech() {

  const [data, setData] = useState([])

  const id = localStorage.getItem("ownerid")
  useEffect(() => {
    console.log(localStorage.getItem("ownerid"));

    axios.post(`http://localhost:4000/workshop/viewmech/${id}`)
      .then((a) => {
        console.log(a.data.result);
        // setData(a.data.result)
      },[])

  })


  // const remove =(id) => {
  //   axios.delete(`http://localhost:4000/workshop/removemech/${id}`).then((data) => {
  //     console.log(data);
  //     if (data.data.status == 200) {
  //       alert("Mechanic removed")
  //       window.location.reload()
  //     }
  //   })
  // }

  return (
    <div>
      <div>
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="/workshop">Workshop</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      aria-current="page"
                      href="/workshop/Ownerdashboard">Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="/workshop/Viewmech"
                    >View Mechanics</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="/workshop/AddMech"
                    >Add Mechanic</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="/workshop/Viewshop"
                    >My Shop</a>
                  </li>
                </ul>
                <span class="navbar-text">
                  <a class="nav-link" href="/workshop/WorkshopLogin">Logout</a>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="mb-4 header">
        <h2 style={{ textAlign: 'center' }}>View Mechanics</h2>
      </div>
      <div class="tblbox">
        <table class="table table-hover">
          <th>Name</th>
          <th>Category</th>
          <th>Availability</th>
          <th>Edit/Delete</th>
          {/* {data.map((t) => {
            return (
                <tr>
                    <td>{t.name}</td>
                    <td>{t.category}</td>
                    <td>Not available</td>
                    <td>
                        <button 
                    // onClick={() => { remove(t._id) }}
                        >Delete</button>
                    </td>
                </tr>
            )
          })} */}
        </table>
      </div>
      <div><button ><a href="/workshop/AddMech">+ Add</a></button></div>
    </div>
  )
}

export default Viewmech