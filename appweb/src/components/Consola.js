import React from 'react';
import CodeMirror from '@uiw/react-codemirror';


function Consola(props) {
 
  return (
    <CodeMirror
    value={props.consola}
    height="200px"
  />
  );
}
export default Consola;