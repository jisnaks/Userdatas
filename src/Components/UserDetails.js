import React, { useEffect, useState } from 'react'

function UserDetails() {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()
        .then((data) => {
          console.log(data)
          setUserdata(data)
        })
        .catch((error) => console.log(error)), [])
  })
  return (
    <div className='container-fluid '>

      <div class="row mt-5">
        {
          userdata.map((item) => {
            return (
              <div class="col-sm-3 mb-5">
                <div className="card border-dark me-5" >
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Usename{item.username}</p>
                    <p className="card-text">Email{item.email}</p>
                  </div>
                </div>

              </div>
            )
          }
        )
}
        </div>
      

    </div>
  )
}

export default UserDetails
