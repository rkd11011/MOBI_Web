import { Avatar } from "@mui/material";
import React from "react";
import Modal from "react-modal";
import { Input } from "@mui/material";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import { Button } from "@mui/material";
import { useState } from "react";
import { getDatabase, ref, onValue, update } from "firebase/database"; //리엑트연동
import "./ReceiptBox.css";

function ReceiptBox() {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const addID = (e) => {
    e.preventDefault();
    const db2 = getDatabase(); //객체생성

    setOpenModal(ref(db2, "users/" + input));
    console.log("input" + input);
    console.log("input" + inputNumber);

    onValue(ref(db2, "users/" + input), (snapshot2) => {
      const data3 = snapshot2.val();
      console.log(data3);
      if (data3 != null) {
        console.log(data3["uid"]); //고유식별자
        console.log(data3["deviceId"]);

        const postData = {
          //데이터 구조생성
          access: "Approval", //형식
          name: data3["name"], //이름
          pid: data3["deviceId"], //PID
        };
        const updates = {}; //업데이트 객체 초기화
        updates["/gatePassID/" + inputNumber + "/" + data3["uid"]] = postData; //키값으로 상위 구조만들고 데이터를 이후에 집어넣음
        update(ref(db2), updates); //post개시
        setOpenModal(false);
      } else {
        console.log("err");
      }
    });
  };
  return (
    <div className="ReceiptBox">
      <div className="ReceiptBox_Info">
        <Avatar />
        <h5>관리자</h5>
      </div>

      <div className="ReceiptBox_Main">
        <p>
          {
            "게이트 신청서를 승인 할 수 있습니다ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ          ㅤㅤ ㅤ"
          }
        </p>
        <Button onClick={() => setOpenModal(true)}>
          <CelebrationOutlinedIcon />
        </Button>
      </div>

      <div className="check"></div>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        shouldCloseOnoverlayClick={false}
        style={{
          overlay: {
            width: 340,
            height: 280,
            backgroundColor: "transparent",
            zIndex: "1000",
            top: "51.5%",
            left: "86.55%",
            marginTop: "-300px",
            marginLeft: "-350px",
          },
        }}
      >
        <div className="modal_FieldA">
          <Input
            type="text"
            placeholder="ID를 입력해주세요"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="modal_FieldB">
          <Input
            type="text"
            placeholder="게이트 번호를 입력해주세요"
            required
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
          />
        </div>

        <div className="modal_buttonsA">
          <button type="text" className="add" onClick={addID}>
            {" "}
            등록하기{" "}
          </button>

          <button onClick={() => setOpenModal(false)} className="can">
            닫기
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ReceiptBox;
