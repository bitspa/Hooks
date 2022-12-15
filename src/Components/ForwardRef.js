import React ,{useRef} from 'react'
import User from './ForwardRef1'
function ForwardPlease() {
  let inputRef=useRef(null)
  function updateInput()
  {
    inputRef.current.value="1000";
    inputRef.current.style.color="red"
    inputRef.current.focus()


  }
  return (
    <div >
      <h1>forwardRef in React </h1>
      <User ref={inputRef} />
      <button onClick={updateInput} >Update Input Box</button>
    </div>
  );

}
export default ForwardPlease;