
const defaultState = {
    loaded: false,
};

const actionMap = {
    'LOADED': function(state) {
        return {
            ...state,
            loaded: true,
        };
    },
};

export default function(state=defaultState, action) {
    if (actionMap[action.type]) {
        return actionMap[action.type](state, action);
    } else {
        return state;
    }
};