import React from 'react';
import { Route } from 'react-router-dom';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
  // exact prop in the route won't greedy match
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
}
