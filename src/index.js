import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import App from 'components/App';

// The app component will be passed to the Root as a child (props.children).
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
