import React, { Component } from 'react';
import SubShape from './battleship_design/assets/Submarine Shape.png'
import MissSmall from './battleship_design/assets/Miss small.png'

function Submarine(props){
  return(

    <div>
      <div className='row'>
        <div className='ship-container col-md-6 co-sm-12'>
          <img src={SubShape} alt={"SubShape"} className='ship-img'/>
        </div>
        <div className='hp-container col-md-6 co-sm-12'>
          <ul>
            <li><img src={MissSmall} alt={'MissSmall'} className='hp-circle'/></li>
            <li><img src={MissSmall} alt={'MissSmall'} className='hp-circle'/></li>
            <li><img src={MissSmall} alt={'MissSmall'} className='hp-circle'/></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Submarine;