import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: '',
      errors: {}
    }

    this.handleTitleFieldChange = this.handleTitleFieldChange.bind(this);
    this.handleBodyFieldChange = this.handleBodyFieldChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.handleFieldValidation = this.handleFieldValidation.bind(this);
  }

  handleTitleFieldChange(event) {
    this.setState({ articleTitle: event.target.value });
  }

  handleBodyFieldChange(event) {
    this.setState({ articleBody: event.target.value });
  }

  handleFieldValidation(event, state) {
    let newError;
    if (state.articleTitle === '' || state.articleTitle === ' ') {
      newError = { articleTitle: `The title field must not be blank.`}
      this.setState({ errors: Object.assign(this.state.errors, newError )})
    }
    if (state.articleBody === '' || state.articleBody === ' ') {
      newError = { articleBody: `The body field must not be blank.`}
      this.setState({ errors: Object.assign(this.state.errors, newError )})
    }
    event.preventDefault();
  }

  handleFormSubmit(event) {
    this.handleFieldValidation(event, this.state);

    if(this.state.articleTitle !== '' && this.state.articleBody !== '') {
      event.preventDefault();

      let formPayload = {
        id: this.props.nextId,
        title: this.state.articleTitle,
        body: this.state.articleBody
      }

      console.log(formPayload);

      this.props.addNewArticle(formPayload);

      this.setState({ articleTitle: '',
                      articleBody: '',
                      errors: {} });
    }
  }

  handleFormClear(event) {
    event.preventDefault();

    this.setState({ articleTitle: '',
                    articleBody: ''});
  }

  render() {
    let errorDiv;
    let errorItems;
    if(Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return (<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <form className="new-article-form callout" onSubmit={this.handleFormSubmit}>
      {errorDiv}
        <TitleField
          content={this.state.articleTitle}
          label="Article Title"
          name="article-title"
          handleChange={this.handleTitleFieldChange}
        />
        <BodyField
          content={this.state.articleBody}
          label="Article Body"
          name="article-body"
          handleChange={this.handleBodyFieldChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleFormClear}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default ArticleFormContainer;
