// import './dos_mares1.jpg'
import React from 'react';


const Cuba = () => {
    return (
        <div>
            <h2>Cuba</h2>
      <img src={`${process.env.PUBLIC_URL}/dos_mares1.jpg`} 
      alt="dos mares" />

        </div>
    )
}

export default Cuba;