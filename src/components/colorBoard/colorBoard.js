import React from 'react';
import'./colorBoard.css'

export default function colorBoard() {
    return( 
        <div>
            <button>PRESS TO REMOVE COLOR</button>
            <button>PRESS TO MIX COLORS</button>
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
