import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('App Component Tests', () => {
  let wrapped;

  beforeEach(() => {
    // Using Enzyme
    wrapped = shallow(<App />);
  });

  it('should show the comment box', () => {
    // Find returns an array
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });

  it('should show the comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
