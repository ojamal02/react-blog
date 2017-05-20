import React from 'react';
import { browserHistory, Link } from 'react-router';

const BackButton = (props) => {
  return (
    <Link onClick={browserHistory.goBack}>
      <div className="button">
        Back
      </div>
    </Link>
  )
}

export default BackButton;
