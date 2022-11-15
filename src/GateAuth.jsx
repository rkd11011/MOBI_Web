import { useMemo } from "react";
import GateAuthBox from "./GateAuthBox";
import GateAuthTable from "./GateAuthTable";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { getDatabase, ref, onValue, remove } from "firebase/database"; //리엑트연동
import React, { useEffect, useState } from "react";

function GateAuth() {
  //삭제

  const onDeleteClick = (gateID_key, userID_key) => {
    const ok = window.confirm("해당 사용자를 삭제하시겠습니까?");

    if (ok) {
      console.log(gateID_key + "게이트" + userID_key + "유저 삭제 됨");

      remove(ref(db, "gatePassID/" + gateID_key + "/" + userID_key));
    }
  };

  const db = getDatabase(); //객체생성

  var gateID_Length = 0;
  var userID_Length = 0;
  var gateID_key = 0;
  var userID_key = 0;

  const starCountRef = ref(db, "gatePassID"); //경로설정
  let [data, setData] = useState([]); //변화를 체크할 변수 등록
  useEffect(() => {
    //작업실행
    onValue(starCountRef, (snapshot) => {
      //경로에서 값 받아옴
      data = []; //사용할 DB
      const data2 = snapshot.val(); //값을 데이터에 저장함
      console.log(data2);
      gateID_Length = Object.keys(data2).length; //게이트 번호 길이
      console.log(gateID_Length);
      for (var i = 0; i < gateID_Length; i++) {
        gateID_key = Object.keys(data2)[i]; //게이트 번호 키값
        console.log(gateID_key);
        userID_Length = Object.keys(data2[gateID_key]).length; //사용자 ID 길이
        console.log(userID_Length);
        for (var j = 0; j < userID_Length; j++) {
          userID_key = Object.keys(data2[gateID_key])[j]; //유저키값구하기
          console.log(userID_key);
          data.push({
            id: userID_key,
            name: data2[gateID_key][userID_key]["name"],
            number: gateID_key,
            success: data2[gateID_key][userID_key]["access"],
            check: (
              <span onClick={onDeleteClick.bind(this, gateID_key, userID_key)}>
                <DeleteOutlineOutlinedIcon />
              </span>
            ),
          });
        }
      }
      setData(data); //데이터 변화 알림
    });
  }, []);

  const columns = useMemo(
    () => [
      {
        accessor: "id",
        Header: "ID",
      },

      {
        accessor: "name",
        Header: "사용자 이름",
      },

      {
        accessor: "number",
        Header: "게이트 번호",
      },
      {
        accessor: "success",
        Header: "승인 여부",
      },
      {
        accessor: "check",
        Header: "",
      },
    ],
    []
  );

  return (
    <div>
      <GateAuthBox />
      <GateAuthTable columns={columns} data={data} />
    </div>
  );
}

export default GateAuth;
