import React, { Component } from 'react';
import MissSmall from './battleship_design/assets/Miss small.png'
import HitSmall from './battleship_design/assets/Hit small.png'


function ShipUI(props){

  let hit = props.hit;
  let HP = props.HP;

  function renderHP(){
    const HParr = [];
    for (let i=0; i<HP; i++){
      let element = (<div key={i}><img src={MissSmall} alt={'MissSmall'} className='hp-circle'/></div>);
      HParr.push(element);
    }
    return HParr;
  }

  function renderHit(){
    const hitArr = [];
    for(let i=0; i<hit; i++){
      let element = (<div key={i}><img src={HitSmall} alt={'MissSmall'} className='hp-circle'/></div>);
      hitArr.push(element);
    }
    return hitArr;
  }

  function renderShipImg(){
    return (<img src={props.src} alt={"DestroyerImg"} className='ship-img' />)
  }


  return(

    <div>
      <div className='ship-container'>
        {renderShipImg()}
      </div>
      <div className='hp-container'>
        {renderHit()}
        {renderHP()}
      </div>
    </div>

  )
}

export default ShipUI;