import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="id-card">
        <section>
        <img src={picture} alt="picture" />
        </section>
        <section>
        <p><span>Last name: </span>{lastName}</p>
        <p><span>First name: </span>{firstName}</p>
        <p><span>Gender: </span>{gender}</p>
        <p><span>Height: </span>{height / 100 + 'm'}</p>
        <p><span>Birth: </span>{birth.toDateString()}</p>
        </section>
    </div>
  )
}

export default IdCard