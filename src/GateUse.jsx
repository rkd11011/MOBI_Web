import { useMemo, React } from "react";
import GateUseTable from "./GateUseTable";
import GateUseBox from "./GateUseBox";
import { getDatabase, ref, onValue } from "firebase/database"; //리엑트연동
import Unix_timestamp from "./Unix_times";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function Gateuse() {
  let [data, setData] = useState([]); //변화를 체크할 변수 등록

  const db = getDatabase(); //객체생성
  var KeysLength = 0;
  const starCountRef = ref(db, "gateLog"); //경로설정
  useEffect(() => {
    //작업실행
    onValue(starCountRef, (snapshot) => {
      data = []; //사용할 DB
      //경로에서 값 받아옴
      const data2 = snapshot.val(); //값을 데이터에 저장함

      KeysLength = Object.keys(data2).length;
      for (var i = 0; i < KeysLength; i++) {
        data.push({
          id: data2[Object.keys(data2)[i]]["id"],
          time: Unix_timestamp(data2[Object.keys(data2)[i]]["time"]),
          name: data2[Object.keys(data2)[i]]["name"],
          number: data2[Object.keys(data2)[i]]["number"],
          success: data2[Object.keys(data2)[i]]["success"],
        });
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
        accessor: "time",
        Header: "이용시간",
      },
      {
        accessor: "success",
        Header: "출입 여부",
      },
    ],
    []
  );

  return (
    <div>
      <GateUseBox />
      <GateUseTable columns={columns} data={data} />
    </div>
  );
}

export default Gateuse;
