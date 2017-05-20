import React, { Component } from 'react';
import ArticleTile from '../components/ArticleTile';
import ArticleFormContainer from '../containers/ArticleFormContainer';

class ArticlesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }

    this.addNewArticle = this.addNewArticle.bind(this)
  }

  // Hint: If you visit `localhost:4567/api/v1/articles` in your browser, you will be able to see the format of the data being fetched
  componentDidMount() {
    fetch('/api/v1/articles')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ articles: [...this.state.articles, ...responseData.articles] })
      })
  }

  addNewArticle(formPayload) {
    fetch('/api/v1/articles', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ articles: [...this.state.articles, responseData] })
    })
  }

  render() {
    let articles = this.state.articles.map(article => {
      return(
        <ArticleTile
          key={article.id}
          id={article.id}
          title={article.title}
          body={article.body}
        />
      )
    })

    return(
      <div className="row">
        <div className="small-8 small-centered columns">
          <div className="header-block">
            <h1>My Blog!</h1>
          </div>
          <hr/>
          {articles}
          <ArticleFormContainer addNewArticle={this.addNewArticle} nextId={articles.length}/>
        </div>
      </div>
    )
  }
}

export default ArticlesIndexContainer;
