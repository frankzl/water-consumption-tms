
const initialState = {

    username: ""

}

const reducer = (state = initialState, action) => {
    let newState = {}
    switch(action.type){
        case "LOGIN": newState = {...state, username: action.username};
            break;
        default:
            break;
    }
    return newState
}

export default reducer