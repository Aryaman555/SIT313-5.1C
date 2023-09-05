import React from 'react';
import { Button } from 'semantic-ui-react';
import './Article.css';

function Article() {
  return (
    <div className='article'>
      <div className='Header'>
        <label>
          Title
          &nbsp;&nbsp;
          <textarea
            placeholder="Enter a descriptive title"
            name='Title'
            rows={1}
            cols={100}
          />
        </label>
      </div>
      <div className='column'>
        <span>Abstract</span>
      </div>
      <div>
        <textarea
          placeholder="Enter a 1-paragraph abstract"
          rows={4}
          cols={100}
        />
      </div>
      <div className='line'>
        <label>Article Text</label>
      </div>
      <div>
        <textarea
          placeholder="Enter the article text"
          rows={7}
          cols={100}
        />
      </div>
      <div className='space'>
        <label>
          Tags:&nbsp;
          <textarea
            placeholder="Please add up to 3 tags to describe your article. e.g., java"
            name='Tags'
            rows={1}
            cols={80}
          />
        </label>
      </div>
      <div className='center-button'>
        <Button className="button">Post</Button>
      </div>
    </div>
  );
}

export default Article;
