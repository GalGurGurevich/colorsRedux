import React from 'react';
import'./colorBoard.css';
import * as actions from '../../redux/actions';
import store from '../../redux/store';
import { connect } from 'react-redux'

function colorBoard(props) {

    return( 
        <div className="canvasBackground">
            <div id="welcome">WELCOME GAL WORLD</div>
            <button onClick={() => props.mixColors()}>PRESS TO MIX COLORS</button>
            <button onClick={() => props.removeColor()}>PRESS TO REMOVE COLOR</button>
            <div className="container">
                <div id="yellow" onClick={() => props.addColor("yellow")}>ADD YELLOW</div>
                <div id="red" onClick={() => props.addColor("red")}>ADD RED</div>
                <div id="blue" onClick={() => props.addColor("blue")}>ADD BLUE</div>
            </div>
            <div>YOU CHOSE: {props.colorFirst}</div>
            <div>MIX WITH: {props.colorSecond}</div>
            <div>YOUR GET COLOR: </div>
            <div>HISTORY MOVES: {props.history}</div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    colorFirst: state.mixColors[0] || '',
    colorSecond: state.mixColors[1] || '',
    mixColor: state.history[state.history.length - 1]
  })

const mapDispatchToProps = dispatch => ({
    addColor(color) { dispatch(actions.colorAdded(color)); },
    removeColor() { dispatch(actions.colorRemoved()); },
    mixColors() { dispatch(actions.colorMix()); }
  });
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(colorBoard)
