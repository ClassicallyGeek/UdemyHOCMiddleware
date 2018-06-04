import React from 'react';
// Using full Dom just to learn it. Shallow would be better in the real world here.
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

describe('Comment Box Module Tests' , () => {
  let wrapped;

  beforeEach(()=> {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>);
  });

  afterEach(() => {
    wrapped.unmount(); // why don't I have to include unmount in the import { } statement?
  });

  it('should have a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
  });

  describe('Text Area', () => {
    let newValue = 'bob';
    let changeEvent = {
      target: {
        value: newValue
      }
    };
    beforeEach(() => {
      // why isn't it textarea [0] <-- thought found returned array?
      // simulate uses the html name of the 'event' not the name of the callback declared in the react code.
      wrapped.find('textarea').simulate('change', changeEvent);
      // force component to update b/c setstate is async we gotta force a rerender to rest values.
      wrapped.update();
    });
    it('should let user enter input into text area', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual(newValue);
    });

    it('should empty text area when form is submitted.', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('bob');
      wrapped.find('form').simulate('submit');
      wrapped.update();
      expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
  });
})
