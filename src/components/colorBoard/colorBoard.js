import React from 'react';
import'./colorBoard.css';
import * as actions from '../../redux/actions';
import store from '../../redux/store';
import { connect } from 'react-redux'

function colorBoard() {

    return( 
        <div className="canvasBackground">
            <button>PRESS TO MIX COLORS</button>
            <button>PRESS TO REMOVE COLOR</button>
            <div className="container">
                <div id="yellow">ADD YELLOW</div>
                <div id="red">ADD RED</div>
                <div id="blue">ADD BLUE</div>
            </div>
            <div>YOU CHOSE: </div>
            <div>MIX WITH: </div>
            <div>YOUR GET COLOR: </div>
            <div>HISTORY MOVES: </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    colorFirst: state.currentMix[0] || '',
    colorSecond: state.currentMix[1] || '',
    mixColor: state.history[state.history.length - 1]
  })

const mapDispatchToProps = {
    // ... normally is an object full of action creators
  }
  
  // `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
  )
  // and that function returns the connected, wrapper component:
const ConnectedComponent = connectToStore(colorBoard)
  
  // We normally do both in one step, like this:
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(colorBoard)
