const initialState = [
    'Smells like',
    'Enter sandman'
];

export const playlist = (state = initialState, action) => {
    if(action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ]
    }
    return state
};