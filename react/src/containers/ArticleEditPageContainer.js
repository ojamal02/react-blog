import React, { Component } from 'react';
import { broswerHistory } from 'react-router';
import ArticleEditFormContainer from './ArticleEditFormContainer';

class ArticleEditPageContainer extends Component {
  constructor(props) {
    super(props)

    this.updateArticle = this.updateArticle.bind(this);
  }

  updateArticle(formPayload) {
    fetch(`/api/v1/articles/${this.props.params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
    })
  }

  render() {
    return (
      <div className="row">
        <div className="small-8 small-centered columns">
          <div className="header-block">
            <h1>My Blog!</h1>
          </div>
          <hr/>
          <ArticleEditFormContainer id={this.props.params.id} updateArticle={this.updateArticle}/>
        </div>
      </div>
    )
  }
}

export default ArticleEditPageContainer;
