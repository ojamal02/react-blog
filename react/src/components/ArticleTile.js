import React from 'react';
import { Link } from 'react-router';

const ArticleTile = (props) => {
  return(
    <div className="article-tile">
      <p><Link to={`/articles/${props.id}`} className="article-link">{props.title}</Link></p>
      <hr/>
    </div>
  )
}

export default ArticleTile;
