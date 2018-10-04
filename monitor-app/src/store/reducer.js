import * as actionTypes from './actions'


const initialState = {
    username: '',
    totalToday: 100,
    limitToday: 128,

    devices: {
        i1: {
            name: 'shower-downstairs',
            total: 10.4,
            limit: 11
        },
        i2: {
            name: 'tap-kitchen',
            total: 1.4,
            limit: 12
        },
        i3: {
            name: 'garden',
            total: 100.3,
            limit: 12
        },
        i4: {
            name: 'shower upstairs',
            total: 5.4,
            limit: 12
        },
        i5: {
            name: 'tap bathroom',
            total: 10.4,
            limit: 12
        },
        i6: {
            name: 'tap-kitchen',
            total: 35.4,
            limit: 12
        },
    }
}

const reducer = ( state = initialState, action ) => {
    let newState = {}
    switch ( action.type ) {
        case actionTypes.LOGIN:
            newState = { ...state, username: action.username };
            break;
        case actionTypes.UPDATE_TOTAL:
            console.log("yo", action.val)
            newState = { ...state, totalToday: action.val };
            break;
        case actionTypes.UPDATE_DEVICES:
            newState = { ...state, devices: action.val}
            break;
        default:
            newState = { ...state };
    }
    return newState
}

export default reducer