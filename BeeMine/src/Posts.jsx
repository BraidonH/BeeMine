import React from 'react';
import Post from './Post'

export default function Posts({content, posted}) {
  return (
    <div className="postContainer">
        {
            content.map(post => {
                return <Post key={post} content={post}/>
            })
        }
    </div>
  )
}
