import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { getDatabase, ref, onValue, remove } from "firebase/database"; //리엑트연동

function Post({ image, notice, timestamp, quoraUser, Id }) {
  const onDeleteClick = async () => {
    const ok = window.confirm("해당 공지사항을 삭제하시겠습니까?");
    console.log(ok);
    if (ok) {
      console.log("공지사항" + Id + " 삭제 됨");
      remove(ref(db, "Articles/" + Id));
    }
  };
  const db = getDatabase(); //객체생성
  return (
    <div className="post">
      <div className="post_Info">
        <Avatar />
        <h5>{quoraUser.displayName ? quoraUser.displayName : "관리자"}</h5>
        <small>{timestamp}</small>
      </div>

      <div className="post_body">
        <div className="post_answer">
          <p> {notice} </p>
        </div>
        <img src={image} alt="" />
      </div>

      <div className="post_footerRight">
        <span onClick={onDeleteClick}>
          <DeleteOutlineOutlinedIcon />
        </span>
      </div>
    </div>
  );
}

export default Post;
