import { combineReducers } from 'redux';

const firstReducer = (state = 0, action) => { // This is a Reducer!
  switch (action.type) {
    case 'BUTTON_ONE':
      return state += 1; // ++ will not work because it tries to mutate the state.
    case 'BUTTON_TWO':
      return state -= 1;
    default:
      return state;
  }
}

const secondReducer = (state = 0, action) => { // This is a Reducer!
  switch (action.type) {
    case 'BUTTON_ONE':
      return state -= 1; // ++ will not work because it tries to mutate the state.
    case 'BUTTON_TWO':
      return state += 1;
    default:
      return state;
  }
}

const thirdReducer = (state, action) => { // This is a Reducer!
  if (action.type === 'ADD_STAR') {
    console.log(`Hey!, I'm the third reducer`, action);
    console.log('State', state);
  }
  return {}
}

const addElement = (state = [], action) => { // This is a Reducer!
  if (action.type === 'ADD_ELEMENT') {
    console.log(`Action`, action.payload);
    // DO NOT USE .PUSH
    return [...state, action.payload]
  }
  return state;
}

export default combineReducers({ // All reducers must go in here
  firstReducer, // this is the same as "firstReducer: firstReducer" and is a function of ES6
  secondReducer,
  thirdReducer,
  addElement,
});