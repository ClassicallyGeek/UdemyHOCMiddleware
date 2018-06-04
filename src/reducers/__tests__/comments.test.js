import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

describe('Comments Reducer', () => {

  it('should handle action of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'new comment'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual([action.payload]);
  });

  it('should return state for any unknown actions', () => {
    const action = {
      type: 'UNKNOWN',
      payload: 'bob'
    };

    expect(commentsReducer([], action)).toEqual([]);
  });
});
