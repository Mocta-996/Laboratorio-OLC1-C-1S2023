import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia, okaidiaInit } from '@uiw/codemirror-theme-okaidia';

function Editor(props) {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
    props.input(value);
  }, []);
  return (
    <CodeMirror
    value="console.log('hello world!');"
    height="200px"
    theme={okaidia}
    extensions={[javascript({ jsx: true })]}
  />
  );
}
export default Editor;