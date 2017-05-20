You will be building a simple blog in React!

## Setup

From your challenges directory, run the following:

```no-highlight
$ et get react-simple-blog
$ cd react-simple-blog
$ bundle install
$ bundle exec ruby server.rb
```

Then in another terminal tab run:

```no-highlight
$ npm install
$ npm start
```

Visit <http://localhost:4567> in your browser. You will see a page with some instructions, and there should be no errors in your JavaScript console. You should plan to follow the instructions on the page as you work through this system check.

**Reminder:** Please be sure to do a **hard refresh** in your browser for changes to take effect (**Shift + Click Refresh** or **Command + Shift + R**). We aren't using `webpack-dev-server` the way we do in other assignments.

## Meets Expectations Requirements

The application right now is in a work-in-progress. Here's what we need to do:

1. We've created a component `ArticlesIndexContainer` that lists all the articles currently created in our application, but we need to make sure that this component is the first thing a user sees when they navigate to `/` (the "index" page). You should accomplish rendering this using React Router.
2. Once you have that rendered, users need to be able to click on an article in the list on `ArticlesIndexContainer` and navigate to `/articles/<article_id>` for that article. So when navigating to `localhost:4567/articles/1` the article with the `id` of `1` should be rendered by the `ArticleShowContainer`. This should be done using React Router's `<Link />` component. Pay attention to what components `ArticlesIndexContainer` returns to figure out where to put this link.
3. After this, go to page for an individual article, `/articles/<article_id>`, also known as the "show" page. You should have already created a dynamic route that renders `ArticleShowContainer` in your Router. On the show page, you should see a `Back` button. Refactor the component so that clicking this button sends a user to the index page for articles using React Router.
4. Next add a handler function to the already-existing form to submit a new blog article. When the form is filled out and submitted, this handler should call the `addNewArticle()` function, which has already been written for you in `ArticlesIndexContainer`. A user should be able to submit a new article via the form on the index page we mentioned in Step 1. The `formPayload` should have format of `{title: <User's Submitted Title>, body: <User's Submitted Body>}`.

**In order to meet expectations, your application must do the following:**

* When a user fills out the new article form and clicks submit, a POST request should be made to `/api/v1/articles`. A correctly-formatted POST request will result in the article being added to the `articles.json` file.
* The newly-submitted article should appear on the index page. This is the page at the root path (`/`) that renders `ArticlesIndexContainer`
* A user must be able to clear the form out of any filled-out data with the `Clear` button.
* The user should be able to navigate to the show page (`ArticleShowContainer`) for an indvidual article from the root path.
* A user should be able to navigate back to the root path using the `Back` button.

Finally, base styling has been applied to the application, but you are
**required** to implement a design of your choice. At a minimum your site should include the following custom styling:

* A custom font.
* A custom color scheme.

## Exceeds Expectations Requirements

A third feature has been requested for your application. We need to give users the ability to edit their articles. In order to exceed expectations your application must meet the following requirements:

* The article show page should include a link to the article edit page.
* The form for the edit page should match the form for a new article, only the edit form should come pre-populated with the article's current information.
* Submitting the form should redirect to the article show page reflecting the changes implemented. These changes should also persist in the `articles.json` file. Note that the API endpoint for `edit` is provided for you in the `server.rb` file.
* There also must be validations that check that both the body and the title fields have been filled out by the user. When a user does not fill in all the required fields, errors pertaining to which fields are missing should appear on the page. So trying to update an article with empty info should cause errors to appear on the page and the user should remain on the edit form page.
