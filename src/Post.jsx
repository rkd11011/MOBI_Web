import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import db from './firebase';

function Post({image, notice, timestamp, quoraUser, Id }) {
  
  const onDeleteClick = async () => {
    const ok = window.confirm("삭제 원츄?");
    console.log(ok);
    if (ok) {
      await db.doc(`notices/${Id}`).delete();
      console.log(Id);
    }
  };
  


  return (
    <div className="post">
      <div className="post_Info">
        <Avatar />
        <h5>{quoraUser.displayName ? quoraUser.displayName : "관리자"}</h5>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>

      <div className="post_body">
        <div className="post_answer">
          <p> {notice} </p>
        </div>
        <img src={image} alt="" />
      </div>

      <div className="post_footerRight">
        <span onClick={onDeleteClick}>
          <DeleteOutlineOutlinedIcon/>
        </span>
      </div>
    </div>
  );
}

export default Post