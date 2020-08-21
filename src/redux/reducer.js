import * as actions from './actionTypes'

export default function reducer(state = { history: [], mixColors: [] }, action) {
    console.log(state);
    switch(action.type) {
        case actions.COLOR_ADDED: 
            if(state.mixColors.length == 2) return state;
            return {
                ...state,
                mixColors : [...state.mixColors , action.payload]
              }
        case actions.COLOR_REMOVED:
            return {
                ...state,
                mixColors: state.mixColors.slice(0, -1)
            }
        case actions.COLOR_MIX: 
            return ({
                ...state,
                history: [...state.mixColors],
                mixColors: []
            })
        default: return state;
    }
}
