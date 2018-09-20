import {combineReducers} from 'redux';

const initialState = {counter: 0};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: action.payload,
      };
    }
    
    default: {
      return state;
    }
  }
};

export const reducer = combineReducers({
  counter: counterReducer,
});