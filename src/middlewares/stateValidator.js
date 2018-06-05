import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

// When the state updates (post middlewares & reducers) we want to validate it.
// getState returns all the state in the Redux Store.
export default({ dispatch, getState }) => (next) => (action) => {
  next(action);

  console.log(tv4.validate(getState(), stateSchema));
};
