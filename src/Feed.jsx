import React, { useEffect, useState } from "react";
import "./Feed.css";
import NoticeBox from "./NoticeBox";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("notices")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            notice: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <NoticeBox />
      {posts.map(({ id, notice }) => (
        <Post
          key={id}
          Id={id}
          image={notice.imageUrl}
          notice={notice.notice}
          timestamp={notice.timestamp}
          quoraUser={notice.user}
        />
      ))}
    </div>
  );
}

export default Feed;
