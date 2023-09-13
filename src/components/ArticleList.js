import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
  return (
    <main>
      {props.posts.map((e) => {
        return (
          <Article
            title={e.title}
            date="January 1, 1970"
            preview={e.preview}
            key={e.id}
          />
        );
      })}
    </main>
  );
};

export default ArticleList;
