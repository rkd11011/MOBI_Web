import { Avatar } from "@mui/material";
import React from "react";
import "./ReceiptBox.css";

function ReceiptBox() {
  return (
    <div className="ReceiptBox">
      <div className="ReceiptBox_Info">
        <Avatar />
        <h5>관리자</h5>
      </div>

      <div className="ReceiptBox_Main">
        <p>게스트 신청서를 확인 할 수 있습니다</p>
      </div>
    </div>
  );
}

export default ReceiptBox;
