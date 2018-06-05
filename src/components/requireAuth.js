// exporting by default a function we name the file with a lowercase letter.

import React, { Component } from 'react';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />;
    }
  }

  return ComposedComponent;
};
