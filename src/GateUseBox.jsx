import { Avatar } from "@mui/material";
import React from "react";
import "./GateUseBox.css";

function GateuseBox() {
  return (
    <div className="GateuseBox">
      <div className="GateuseBox_Info">
        <Avatar />
        <h5>관리자</h5>
      </div>

      <div className="GateuseBox_Main">
        <p>게이트 출입 여부를 확인 할 수 있습니다</p>
      </div>
    </div>
  );
}

export default GateuseBox;
