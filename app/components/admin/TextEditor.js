import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

// Dynamically import ReactQuill with SSR set to false
const ReactQuillNoSSRWrapper = dynamic(
  () => import('react-quill'),
  { ssr: false }
);

const TextEditor = ({ value, onChange }) => {
    return (
      <ReactQuillNoSSRWrapper
        theme="snow"
        value={value}
        onChange={onChange}
      />
    );
};

export default TextEditor;
