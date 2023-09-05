import React from 'react';
import { Button } from 'semantic-ui-react';
import './Question.css';

function Question() {
  return (
    <div className='Question'>
      <div className='titlebar'>
        <label>
          Title
          &nbsp;&nbsp;
          <textarea
            placeholder="Start your question with how, what, why, etc.."
            name='Title'
            rows={1}
            cols={100}
          />
        </label>
      </div>
      <div className='Tutorial'>
        <label>Describe your problem</label>
      </div>
      <div>
        <textarea
          placeholder=""
          name='description'
          rows={10}
          cols={100}
        />
      </div>
      <div className='web'>
        <label>
          Tags
          &nbsp;
          <textarea
            placeholder="Please add up to 3 tags to describe what your question is about. e.g., java"
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

export default Question;
