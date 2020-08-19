import * as actions from './actionTypes'

export const colorAdded = color => ({
    type: actions.COLOR_ADDED,
    payload: {
        color: color
    }
});

export const colorRemoved = color => ({
    type: actions.COLOR_REMOVED,
    payload: {
        color: color
    }
});

export const colorMix = (baseColor, mixWithColor) => ({
    type: actions.COLOR_MIX,
    payload: {
        color: baseColor + " " + mixWithColor
    }
})
