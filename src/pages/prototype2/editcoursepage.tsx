import Quill from 'quill';
import { useEffect } from 'react';

const CourseEdit = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const options = {
        debug: 'info',
        modules: {
          toolbar: '#toolbar'
        },
        placeholder: 'Compose an epic...',
        readOnly: true,
        theme: 'snow'
      };
      const editor = new Quill('#editor', options);
    }
  }, []);

  return (
    <div>
      <div id="toolbar">
        <button className="ql-bold">Bold</button>
        <button className="ql-italic">Italic</button>
      </div>
      <div id="editor">
        <p>Hello World!</p>
      </div>
    </div>
  );
};

export default CourseEdit;
