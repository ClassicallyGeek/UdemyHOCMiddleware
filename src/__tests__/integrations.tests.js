import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

describe('integration tests', () => {
  let response = [
    { name: 'Fetched #1 Ned Stark' },
    { name: 'Fetched #2 Sansa Stark' },
    { name: 'Fetched #3 Jon Snow' }
  ];

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [
        { name: 'Fetched #1 Ned Stark' },
        { name: 'Fetched #2 Sansa Stark' },
        { name: 'Fetched #3 Jon Snow' }
      ]
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fetch a list of comments and display them', (done) => {
    // Attempt to render *entire* app
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );
    //Find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
      wrapped.update();

      expect(wrapped.find('li').length).toEqual(response.length);

      /* We can tell jest we're actually done now- otherwise it won't wait for the
      timeout and will check for errors before the timeout stuff executes. */
      done();
      wrapped.unmount();
    });
  });
});
