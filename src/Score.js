import React, { Component } from 'react';

function Score (props){

  function updateScore(){
    let score = props.playerOne;
    if( score.toString().length<2 ){
      return 0 + score.toString();
    }else{
      return score.toString();
    }
  }

  return(
    <div className='table-container'>
      <table className='score-table'>
        <tr className='score-row'>
          <td className='player-one'><div className='score-div'>{updateScore()}</div></td>
          <td className='player-two'><div className='score-div'>00</div></td>
        </tr>
        <tr className='player-row'>
          <td className='player-one'>player 1</td>
          <td className='player-two'>player 2</td>
        </tr>
      </table>
    </div>
  )
}

export default Score;