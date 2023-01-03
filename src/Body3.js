import React from 'react'
import hitech from './hitech.png';
import './Body3.css'
import invert from './invert.svg'
import proline from './proline.png'

function Body3() {
  return (
    <div className="body3">
      <div className='text'>Trusted and loved by the world's best team</div>
      <div className='logos'>

      <img src={hitech} alt="" className='hitech'></img>
      <img src={invert} alt="" className='invert'></img>
      <img src={proline} alt="" className='proline'></img>
      </div>
    </div>
  );
}

export default Body3