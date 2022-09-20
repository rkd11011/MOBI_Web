import { useMemo, React } from "react";
import "./styles.css";
import Table from "./Table";

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
      Array(20)
        .fill()
        .map(() => ({
          name: "A",
          number: "B",
          time: "C",
          success: "D",
        })),
    []
  );

  return <Table columns={columns} data={data} />;
}

export default Gateuse;
