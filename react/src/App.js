import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ArticlesIndexContainer from './containers/ArticlesIndexContainer';
import ArticleShowContainer from './containers/ArticleShowContainer';
import ArticleEditPageContainer from './containers/ArticleEditPageContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={ArticlesIndexContainer} />
      <Route path="/articles/:id" component={ArticleShowContainer} />
      <Route path="/articles/:id/edit" component={ArticleEditPageContainer} />
    </Router>
  );
}

export default App;
