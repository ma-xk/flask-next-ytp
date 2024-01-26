'use client';

import React, { useEffect } from 'react';
import 'quill/dist/quill.snow.css'; // Import the Quill stylesheet
import Quill from 'quill'; // Import the Quill library

const QuillEditor = () => {
  useEffect(() => {
    // Initialize Quill editor
    new Quill('#editor', {
      theme: 'snow',
    });
  }, []);

  return (
    <div>
        <div id="toolbar">
  <button class="ql-bold">Bold</button>
  <button class="ql-italic">Italic</button>
</div>
      <div id='editor'></div>
    </div>
  );
};

export default QuillEditor;
