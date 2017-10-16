import React, { Component } from 'react';
import Empty from './battleship_design/assets/Empty.png';
import BigHit from './battleship_design/assets/Hit.png';
import BigMiss from './battleship_design/assets/Miss.png'

class Square extends React.Component {

  constructor(){
    super();
    this.state = {
      checked: false
    };

    this.getClass = this.getClass.bind(this);
    this.getGraphic = this.getGraphic.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  getClass(){
    if( this.state.checked ){
      if( this.props.ship ){
        return 'square not-click';
      }
      else{
        return 'square not-click';
      }
    }
    else{
      return 'square unchecked';
    }
  }

  getGraphic(){
    if( this.state.checked ){
      if(this.props.ship){
        return BigHit;
      }else{
        return BigMiss;
      }
    }
    else{
      return Empty;
    }
  }

  onButtonClick( e ){

    this.setState({
      checked: true
    });
    this.props.onClick(e);
  }

  render(){
    return (
      <button className={ this.getClass() } onClick={this.onButtonClick}>
        <img className='cross-img' src={this.getGraphic()} />
      </button>
    );
  }
}


export default Square;