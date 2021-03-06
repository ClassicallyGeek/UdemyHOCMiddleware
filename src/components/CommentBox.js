import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
  state = { comment: '' };

  // making it a bound arrow function- instead of bind?
  handleChange = (event) => {
    this.setState({ comment:event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Stop the form from submitting itself & reloading the page.

    //Call an action creator & Save the comment
    this.props.saveComment(this.state.comment);

    this.setState( {comment: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit = { this.handleSubmit }>
          <h4>Enter a Comment</h4>
          <textarea value={ this.state.comment } onChange={ this.handleChange }/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={ this.props.fetchComments }>Fetch Comments</button>
      </div>
    )
  };
}

export default connect(null, actions)(requireAuth(CommentBox));
