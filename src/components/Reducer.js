

const nameInitialState = {}

const reducerOne = (state = nameInitialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            return state
        case ACTION_TYPE_2:
            return state
        default:
            return state
    }
}
var store = require('redux').createStore(reducerOne);

export default store