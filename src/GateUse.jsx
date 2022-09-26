import { useMemo, React } from "react";
import GateUseTable from "./GateUseTable";
import GateuseBox from "./GateUseBox";

function Gateuse() {
  
  const columns = useMemo(
    () => [
      {
        accessor: "id",
        Header: "ID"
      },

      {
        accessor: "name",
        Header: "사용자 이름"
      },
      
      {
        accessor: "number",
        Header: "게이트 번호"
      },
      {
        accessor: "time",
        Header: "이용시간"
      },
      {
        accessor: "success",
        Header: "출입 여부"
      }
    ],
    []
  );

  const data = useMemo(
    () =>
      Array(3)
        .fill()
        .map(() => ({
          id: "A1231",
          name: "김덕기",
          number: "1",
          time: "10",
          success: "OK",
        })),
    []
  );
  
  return(
    <div>
    <GateuseBox />
    <GateUseTable columns={columns} data={data} />
   
   </div>
  )
}

export default Gateuse;
