// exporting by default a function we name the file with a lowercase letter.

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if(!this.props.auth) {
        this.props.history.push("/");
      }
    }

    // {...this.props} takes any props we have received and passes them down to the childcomponent.
    render() {
      return <ChildComponent  {...this.props} />;
    }
  }

  function mapStateToProps({auth}) {
    return {auth}
  }

  return connect(mapStateToProps)(ComposedComponent);
};
