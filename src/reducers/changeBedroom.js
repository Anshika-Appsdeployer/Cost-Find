const initialState = 0;

export const changeBedroom = (state = initialState, action) =>{
    switch(action.type){
        case "INCREMENT_BEDROOM": return state + 1;
        case "DECREMENT_BEDROOM": return state - 1;
        default: return state;
    }
}




