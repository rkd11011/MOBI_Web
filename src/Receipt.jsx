import { useMemo, React } from "react";
import ReceiptTable from "./ReceiptTable";
import ReceiptBox from "./ReceiptBox";
import { getDatabase, ref, onValue, remove } from "firebase/database"; //리엑트연동
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Unix_timestamp from "./Unix_times";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./Receipt.css";

function Receipt() {
  let [data, setData] = useState([]); //변화를 체크할 변수 등록
  let [userName, setName] = useState("초기값"); //변화를 체크할 변수 등록

  const onDeleteClick = (post_key) => {
    const ok = window.confirm("해당 사용자를 삭제하시겠습니까?");
    if (ok) {
      console.log(post_key + "포스트 삭제 됨");
      remove(ref(db, "Profiles/" + post_key));
    }
  };

  const db = getDatabase(); //객체생성
  var KeysLength = 0;

  useEffect(() => {
    //작업실행

    onValue(ref(db, "Profiles"), (snapshot) => {
      //경로에서 값 받아옴
      data = [];
      const data2 = snapshot.val(); //값을 데이터에 저장함
      KeysLength = Object.keys(data2).length;

      for (var i = KeysLength - 1; i >= 0; i--) {
        // eslint-disable-next-line no-loop-func
        onValue(
          ref(db, "users/" + data2[Object.keys(data2)[i]]["signId"] + "/name"),
          (nameSnapshot) => {
            const data3 = nameSnapshot.val();
            //console.log(data2[Object.keys(data2)[i]]["signId"]);
            if (data3 == null) {
              console.log("미등록자");
              setName((userName = "미등록자"));
            } else {
              console.log(data3);
              setName((userName = data3));
            }
          }
        );
        data.push({
          signId: data2[Object.keys(data2)[i]]["signId"], //작성자
          userName: userName,
          name: data2[Object.keys(data2)[i]]["title"],
          time: Unix_timestamp(data2[Object.keys(data2)[i]]["createdAt"]),
          contents: data2[Object.keys(data2)[i]]["contents"],
          delete: (
            <Button onClick={onDeleteClick.bind(this, Object.keys(data2)[i])}>
              <DeleteOutlineOutlinedIcon />
            </Button>
          ),
        });
      }
      setData(data); //데이터 변화 알림
    });
  }, [userName]);

  const columns = useMemo(
    () => [
      {
        accessor: "signId",
        Header: "ID",
      },
      {
        accessor: "userName",
        Header: "이름",
      },
      {
        accessor: "name",
        Header: "제목",
      },
      {
        accessor: "time",
        Header: "\t\t시간\t\t",
      },
      {
        accessor: "contents",
        Header: "내용",
      },
      {
        accessor: "delete",
        Header: "",
      },
    ],
    []
  );

  return (
    <div>
      <ReceiptBox />
      <ReceiptTable columns={columns} data={data} />
    </div>
  );
}

export default Receipt;
