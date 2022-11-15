import { Avatar } from "@mui/material";
import React from "react";
import "./GateAuthBox.css";

function GateAuthBox() {
  return (
    <div className="GateAuthBox">
      <div className="GateAuthBox_Info">
        <Avatar />
        <h5>관리자</h5>
      </div>

      <div className="GateAuthBox_Main">
        <p>게이트 사용에 대해 승인 할 수 있습니다</p>
      </div>
    </div>
  );
}

export default GateAuthBox;
