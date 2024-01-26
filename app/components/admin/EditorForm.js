'use client'

import { useState } from 'react';
import TextEditor from './TextEditor';
import QuillEditor from './QuillEditor';


const EditorForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint to handle the submitted content
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          author,
          date,
          content,
        }),
      });

      if (response.ok) {
        console.log('Submission successful');
        // Optionally, you can reset the form fields after successful submission
        setTitle('');
        setAuthor('');
        setDate('');
        setContent('');
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting content:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br />
      <TextEditor value={content} onChange={handleEditorChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditorForm;