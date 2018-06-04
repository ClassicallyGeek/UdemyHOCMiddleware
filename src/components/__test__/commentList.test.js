import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

describe('Comment List Component', () => {
  let wrapped;
  let comments = ['Comment 1 ', 'Comment 2'];
  beforeEach(() => {
    const initialState = { comments };

    wrapped = mount(
      <Root initialState = {initialState}>
        <CommentList />
      </Root>
    );
  });

  it ('Shows one "li" element per comment', () => {
    expect(wrapped.find('li').length).toEqual(comments.length);
  });

  it('should show the text for each comment', () => {
    expect(wrapped.render().text()).toContain(comments[0]);
    expect(wrapped.render().text()).toContain(comments[1]);
  });
});
