const counterInitialState = 0

const countReducer = (state = counterInitialState, action)=> {
    switch(action.type){
         case 'INCREMENT' : 
            return state + 1
         case 'DECREMENT' : 
            return state - 1
         default:
         return state
    }
}

export default countReducer