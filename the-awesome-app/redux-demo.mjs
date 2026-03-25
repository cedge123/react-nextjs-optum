
import { createStore } from 'redux'

const initialstate = {
  message: "hello",
  count: 5
}

//reducer 
const reducer = (state = initialstate, action) => {
  if (action.type == "increment_ctr") {
    return {
      ...state,
      count: state.count + 1
    }
  }
  if (action.type == "update_ctr") {
    return {
      ...state,
      count: action.ctr
    }
  }
  return state;
}

const store = createStore(reducer);
console.log("state: ", store.getState());
store.subscribe(() => {
  console.log("state in subscriber:", store.getState())
})

store.dispatch({ type: "increment_ctr" });
//console.log("state: ",store.getState());
store.dispatch({ type: "update_ctr", ctr: 10 })
//console.log("state: ",store.getState());