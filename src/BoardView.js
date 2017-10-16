import React, { Component } from 'react';
import Square from './Square';


class BoardView extends React.Component {

  renderSquare(x,y) {

    const position = {
      x: x,
      y: y,
    };

    let isShip = false;
    let shipLayout = undefined;
    this.props.layout.forEach( function( layout ){
      layout.positions.forEach( function( [shipX, shipY] ){
        if( x === shipX && y === shipY ){
          isShip = true;
          shipLayout = layout;
        }
      });
    });

    function handleSquareClick(){
      this.props.onClick( { shipLayout, isShip, x, y } );
    }

    return (
      <Square
        ship={isShip}
        key={[x,y]}
        onClick={ handleSquareClick.bind( this ) }
      />
    );
  }

  render() {
    const cells = [];
    for( let y=0; y<10; y++){
      for(let x=0; x<10; x++){
        cells.push(this.renderSquare(x,y));
      }
    }

    return (
      <div id='square-container'>
        {cells}
      </div>
    );
  }
}

export default BoardView;