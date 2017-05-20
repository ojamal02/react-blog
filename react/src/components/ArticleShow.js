import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import BackButton from './BackButton';

class ArticleShow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="article-show">
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <BackButton />
        <Link to={`/articles/${this.props.id}/edit`}>
          <div className="button">
            Edit
          </div>
        </Link>
      </div>
    )
  }
}

export default ArticleShow;
