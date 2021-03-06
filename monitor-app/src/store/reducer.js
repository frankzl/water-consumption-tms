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
    },

    deviceData: []
}

const data = []

for ( let x = 1; x <= 30; x++ ) {
    data.push( { x: x, y: Math.floor( Math.random() * 100 ) } )
}

initialState.deviceData = data

const reducer = ( state = initialState, action ) => {
    let newState = {}
    switch ( action.type ) {
        case actionTypes.LOGIN:
            newState = { ...state, username: action.username };
            break;
        case actionTypes.UPDATE_TOTAL:
            newState = { ...state, [action.date]: action.val };
            break;
        case actionTypes.UPDATE_DEVICES:
            newState = { ...state, devices: action.val}
            break;
        case actionTypes.UPDATE_DEVICE_DATA:
            newState = { ...state, deviceData: action.val}
            break;
        case actionTypes.ADD_DEVICE:
            const devices = {...state.devices}
            devices[action.id] = {
                name: action.name,
                total: 0,
                limit: action.limit
            }
            newState = {...state, devices: devices}
            break;
        default:
            newState = { ...state };
    }
    return newState
}

export default reducer