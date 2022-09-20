import { useMemo, React } from "react";
import "./Gateuse.css";
import Table from "./Table";
import GateuseBox from "./GateuseBox";

function Gateuse() {
  
  const columns = useMemo(
    () => [
      {
        accessor: "name",
        Header: "사용자ID"
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
      Array(10)
        .fill()
        .map(() => ({
          name: "A",
          number: "1",
          time: "10",
          success: "OK",
        })),
    []
  );
  
  return(
    <div>
    <GateuseBox />
   <Table columns={columns} data={data} />
   
   </div>
  )
}

export default Gateuse;
