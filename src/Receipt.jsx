import { useMemo, React } from "react";
import ReceiptTable from "./ReceiptTable";
import ReceiptBox from "./ReceiptBox";

function Receipt() {
  
  const columns = useMemo(
    () => [
      {
        accessor: "name",
        Header: "이름"
      },
      {
        accessor: "time",
        Header: "\t\t시간\t\t"
      },
      {
        accessor: "contents",
        Header: "내용"
      }
    ],
    []
  );

  const data = useMemo(
    () =>
      Array(2)
        .fill()
        .map(() => ({
          name: "김덕기",
          time: "2022/02/22 22:22:22",
          contents: "밥 빌어먹고 살기힘들다.. 밥 빌어먹고 살기힘들다..",
        })),
    []
  );
  
  return(
    <div>
    <ReceiptBox />
    <ReceiptTable columns={columns} data={data} />
   
   </div>
  )
}

export default Receipt;
