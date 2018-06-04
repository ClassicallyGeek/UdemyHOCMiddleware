import { saveComment} from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('Save Comment Actions', () => {
  it('should have the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('should have the correct payload', () => {
    const comment = 'a comment';
    const action = saveComment(comment);
    expect(action.payload).toEqual(comment);
  });
});
