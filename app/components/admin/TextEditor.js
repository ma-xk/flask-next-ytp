'use client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value, onChange }) => {
    return (
      <ReactQuill
        theme="snow"
        // value={value}
        // onChange={onChange}
      />
    );
  };

export default TextEditor