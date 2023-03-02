import React from 'react'

function Review({data}) {
  return (
    <div>
        {data.map(item => (
          <div>
              <h6>{item.name}</h6>
              <p>{item.date}</p>
              <p>Rating:{item.rating}</p>
              <p>{item.comments}</p>

              </div>
        ))}
    </div>
  )
}

export default Review