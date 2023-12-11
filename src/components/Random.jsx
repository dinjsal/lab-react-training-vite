import React from 'react'

function Random({min, max}) {
  return (
    <div>
        <p>Random value between {min} and {max}: {Math.floor(Math.random() * (max-min) + 1)}</p>
    </div>
  )
}

export default Random