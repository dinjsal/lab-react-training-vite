import React from 'react'
  
function BoxColor({r, g, b}) {
    // const divStyle = {
    //     color: {color},
    //     backgroundColor: {bgColor},
    //   };
  return (
    //change the backgroundColor passing {r, g, b} values
    <div className='box-color' style={{ backgroundColor: "rgb(255, 0, 0)"}}>
        <p>rgb({r},{g},{b})</p>
        {/* <p>#fff000</p> */}
    </div>
  )
}

export default BoxColor

