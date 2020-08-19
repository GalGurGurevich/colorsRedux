import * as actions from './actionTypes'

export const colorAdded = color => ({
    type: actions.COLOR_ADDED,
    payload: {
        color: color
    }
});

export const colorRemoved = () => ({
    type: actions.COLOR_REMOVED
});

export const colorMix = () => ({
    type: actions.COLOR_MIX
})
