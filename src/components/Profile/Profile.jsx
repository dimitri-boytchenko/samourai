import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
console.log(s);
const Profile = () => {
   return (
      <div >
         <div className={s.content}>
             <img src="https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgeo.2F2020.2F01.2F08.2Fd0539a42-8114-44a0-a0bc-ae434b7ef018.2Ejpeg/1150x647/background-color/ffffff/quality/70/quelles-sont-les-plus-belles-plages-du-monde.jpg"></img>
        
         <div> Avatar + discript + post</div>
         <MyPosts/>
          </div>
      </div>
     
   )
}

export default Profile;