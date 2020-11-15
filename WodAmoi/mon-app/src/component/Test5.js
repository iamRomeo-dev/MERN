import React from 'react';
import {apiStates, useApi} from './Test3.jsx'

const PostList = () => {
  const { state, error, data } = useApi('https://api.mysite.com');

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || 'General error'}</p>;
    case apiStates.SUCCESS:
      return (
        <React.Fragment>
          <p>Data:</p>
          <ul>
            {data.map((element) => (
              <li>{element.title}</li>
            ))}
          </ul>
        </React.Fragment>
      );
    default:
      return <p>loading..</p>;
  }
};

export default PostList;