import React from 'react';
import s from './Post.module.css';
console.log(s);
const Post = (props) => {
   return (
      
      <div className={s.post}>
         <img  className={s.post_img} src="https://img1.freepng.fr/20180402/oaq/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6760664.4895544815226654464834.jpg" alt="" />
        Premier post
      
      <input value="5" />
      <span>{props.message}</span>
      <span>{props.likes}</span>
      
      </div>
    )
}

export default Post;