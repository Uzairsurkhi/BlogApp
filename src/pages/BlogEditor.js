// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addPost, editPost } from '../redux/actions/blogActions';
// import { useHistory, useParams } from 'react-router-dom';
// import { Editor, EditorState } from 'draft-js';
// import 'draft-js/dist/Draft.css';

// const BlogEditor = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const { id } = useParams();
//   const isEdit = !!id;

//   const handleSave = () => {
//     const content = editorState.getCurrentContent().getPlainText();
//     if (isEdit) {
//       dispatch(editPost({ id: parseInt(id), content }));
//     } else {
//       dispatch(addPost({ id: Date.now(), content }));
//     }
//     history.push('/');
//   };

//   return (
//     <div>
//       <Editor editorState={editorState} onChange={setEditorState} />
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default BlogEditor;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, editPost } from '../redux/actions/blogActions';
import { useNavigate, useParams } from 'react-router-dom'
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const BlogEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const handleSave = () => {
    const content = editorState.getCurrentContent().getPlainText();
    if (isEdit) {
      dispatch(editPost({ id: parseInt(id), content }));
    } else {
      dispatch(addPost({ id: Date.now(), content }));
    }
    navigate('/');
  };

  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default BlogEditor;