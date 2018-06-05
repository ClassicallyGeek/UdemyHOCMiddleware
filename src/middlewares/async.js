// export default function({dispatch}) {
//   return function(next) { // next is a reference to the next middleware on the chain.
//     return function(action) {
//
//     }
//   }
// }

export default ({dispatch}) => (next) => (action) => {
  // Check to see if the action has a promise in its playload property- then is a good indicated of a promise.
  if (!action.payload || !action.payload.then) {
    // if it doesn't send the action on to next middleware
    return next(action);
  }
  // if it does wait for it to resolve, create new action with data & dispatch it.
  action.payload.then(response => {
    const newAction = { ...action, payload: response }; //will overwrite payload w/new data.
    dispatch(newAction);
  });
}
