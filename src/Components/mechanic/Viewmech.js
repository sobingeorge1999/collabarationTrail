import React from 'react'

function Viewmech() {
  return (
    <div>
          <div class="mb-4 header">
              <h2 style={{ textAlign: 'center' }}>View Mechanics</h2>
          </div>
          <div class="tblbox">
              <table class="table table-hover">
                <th>No.</th>
                <th>Name</th>
                <th>Category</th>
                <th>Availability</th>
                <th>Edit/Delete</th>
                <tr>
                    <td>1.</td>
                    <td>Amal</td>
                    <td>Mechanical work</td>
                    <td>Not available</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
              </table>
          </div>
          <div><button>+Add</button></div>
    </div>
  )
}

export default Viewmech