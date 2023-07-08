import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import Feed from './Feed';
import Posts from './Posts';
import TextField from  '@mui/material/TextField';
import Button from  '@mui/material/Button';

 const Center = () => {
    const inputRef = useRef(null);
    const [input, setInput] = useState([])
    const [post, setPosts] = useState(false)
    

    const setPost = () => {
       setInput(arr => [...arr, inputRef.current.value]);
       console.log(input)
    }

  return (
    <div class="default" id="main">
        <Feed />
        <input
        placeholder='Say something Buzzworthy'
          className="input"
          ref={inputRef}
          style={{width: "30rem"}}
        />
        <button className="Button" onClick={setPost}>POST</button>
        <Posts content={input} posted={post}/>
    </div>
  )
}





export default Center;