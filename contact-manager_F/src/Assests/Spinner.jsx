import React from 'react'
import Loader from '../Assests/1489.gif'
const Spinner = () => {
  return (
    <div>
      <img src={Loader} alt="Loading..." style={{margin:"50px 600px",height:"200px",width:"200px"}}/>
    </div>
  )
}

export default Spinner
