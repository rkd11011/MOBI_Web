import { Avatar } from "@mui/material";
import React from "react";
import "./GateUseBox.css";

function GateUseBox() {
  return (
    <div className="GateUseBox">
      <div className="GateUseBox_Info">
        <Avatar />
        <h5>관리자</h5>
      </div>

      <div className="GateUseBox_Main">
        <p>게이트 출입 기록을 확인 할 수 있습니다</p>
      </div>
    </div>
  );
}

export default GateUseBox;
