const ADD = "ADD";
const REDUCE = "REDUCE";

// reducer
const initState = {num:0};
export function count(state = initState, action) {
  switch (action.type) {
    case ADD:
      return {...state,num:state.num+1};
    case REDUCE:
      return {...state,num:state.num-1};
      default:return state
  }
}

// action
export function addgun(){
    return {type:ADD}
}
export function lessgun(){
    return {type:REDUCE}
}
export function addgunLatter(){
    return dispatch=>setTimeout(()=>{dispatch(addgun())},2000)
    // return {type:ADD}
}
