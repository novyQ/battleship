import React, { Component } from 'react';
import './App.css';
import BoardView from './BoardView';
import Score from './Score';
import ShipUI from './ShipUI';
import CarrierImg from './battleship_design/assets/Aircraft Shape.png'
import BattleshipImg from './battleship_design/assets/Battleship Shape.png'
import CruiserImg from './battleship_design/assets/Cruiser Shape.png'
import SubImg from './battleship_design/assets/Submarine Shape.png'
import DestroyerImg from './battleship_design/assets/Destroyer Shape.png'

var data = {
  "shipTypes": {
    "carrier": { "size": 5, "count": 1 },
    "battleship": { "size": 4, "count": 1 },
    "cruiser": { "size": 3, "count": 1 },
    "submarine": { "size": 3, "count": 1 },
    "destroyer": { "size": 2, "count": 1 },
  },
  "layout": [
    { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] },
    { "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]] },
    { "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]] },
    { "ship": "submarine", "positions": [[3,0], [3,1], [3,2]] },
    { "ship": "destroyer", "positions": [[0,0], [1,0]] }
  ]
}


class App extends Component {


  constructor() {
    super();
    this.state = {
      carrier: {HP:5, hit:0},
      battleship: {HP:4, hit:0},
      cruiser: {HP:3, hit:0},
      submarine: {HP:3, hit:0},
      destroyer: {HP:2, hit:0},
      playerOne: 0
    };
  }

  handleClick( squareData ) {

    if( squareData.isShip ){
      console.log( 'hit', squareData.x, squareData.y );
      console.log( 'layout', squareData.shipLayout );
      console.log( 'ship type', data.shipTypes[ squareData.shipLayout.ship ] );
      let shipType = squareData.shipLayout.ship;
      let newHP = this.state[shipType].HP - 1;
      let newHit = this.state[shipType].hit + 1;
      let score = this.state.playerOne + 1;
      this.setState({[shipType]:{HP: newHP, hit:newHit},
                      playerOne: score});
      console.log(shipType, newHP, newHit, score);
    }
    else{
      console.log('miss', squareData.x, squareData.y );
    }

  }


  render() {

    return (

      <div>

        <div className='header'>
          <div className='header-one header-child'></div>
          <div className='header-two header-child'></div>
          <div className='header-three header-child'></div>
          <div className='header-four header-child'></div>
          <div className='header-five header-child'></div>
          <div className='header-six header-child'></div>
        </div>

        <div className='container'>

            <div className='board-view'>
              <BoardView
                onClick={e => this.handleClick(e)}
                layout={data.layout}
              />
            </div>

            <div className='ships'>

              <Score playerOne={this.state.playerOne} />
              <div className='ship-ui-container'>
                <ShipUI
                  type='carrier'
                  src={CarrierImg}
                  HP={this.state.carrier.HP}
                  hit={this.state.carrier.hit}
                />
                <ShipUI
                  type='battleship'
                  src={BattleshipImg}
                  HP={this.state.battleship.HP}
                  hit={this.state.battleship.hit}
                />
                <ShipUI
                  type='cruiser'
                  src={CruiserImg}
                  HP={this.state.cruiser.HP}
                  hit={this.state.cruiser.hit}
                />
                <ShipUI
                  type='sub'
                  src={SubImg}
                  HP={this.state.submarine.HP}
                  hit={this.state.submarine.hit}
                />
                <ShipUI
                  type='destroyer'
                  src={DestroyerImg}
                  HP={this.state.destroyer.HP}
                  hit={this.state.destroyer.hit}
                />
              </div>

            </div>

        </div>
      </div>
    );
  }
}


export default App;
