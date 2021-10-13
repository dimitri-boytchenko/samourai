import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
console.log(s);
const MyPosts = () => {
   return (
      
      <div>
         My posts
         <div>New post </div>
         <div className={s.posts}>
            <Post message ="hi,  "
            likes ="likes : 10"/>
            <Post message ="hello, "
            likes =" likes : 5"/>
            <Post/>
           
         </div>
         
      </div>
    )
}

export default MyPosts;