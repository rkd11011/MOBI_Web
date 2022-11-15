import React, { useEffect, useState } from "react";
import NoticeBox from "./NoticeBox";
import Post from "./Post";
import { getDatabase, ref, onValue } from "firebase/database"; //리엑트연동
import Unix_timestamp from "./Unix_times"; //시간변환

function Feed() {
  const db2 = getDatabase(); //객체생성
  var KeysLength = 0; //데이터수
  const starCountRef = ref(db2, "Articles"); //경로설정

  let [data, setData] = useState([]); //변화를 체크할 변수 등록
  useEffect(() => {
    //작업실행
    onValue(starCountRef, (snapshot) => {
      //경로에서 값 받아옴
      const data2 = snapshot.val(); //값을 데이터에 저장함
      data = []; //사용할 DB
      KeysLength = Object.keys(data2).length; //등록된 데이터 숫자 확인
      for (var i = KeysLength - 1; i >= 0; i--) {
        //출력 할 구조에 하나씩 밀어넣음
        data.push({
          id: Object.keys(data2)[i], //식별자
          contents: data2[Object.keys(data2)[i]]["contents"], //내용 글
          createdAt: Unix_timestamp(data2[Object.keys(data2)[i]]["createdAt"]), //작성시간
          imageUrl: data2[Object.keys(data2)[i]]["imageUrl"], //이미지 URL
          noticeId: data2[Object.keys(data2)[i]]["noticeId"], //작성자ID
          title: data2[Object.keys(data2)[i]]["title"], //제목
        });
      }
      setData(data); //데이터 변화 알림
      console.log(data); //데이터 확인
    });
  }, []);

  const use_for = (arr) => {
    //출력할 내용만들기
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(
        <Post
          key={i}
          Id={arr[i].id}
          image={arr[i].imageUrl}
          notice={arr[i].contents}
          timestamp={arr[i].createdAt}
          quoraUser={arr[i].noticeId}
        />
      );
    }
    return result;
  };

  return (
    <div className="feed">
      <NoticeBox />
      {use_for(data)}
    </div>
  );
}

export default Feed;
