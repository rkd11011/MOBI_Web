import { Home } from "@material-ui/icons";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState } from "react";
import "./Navbar.css";
import { Avatar, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/UserSlice";
import db, { auth } from "./firebase";
import Modal from "react-modal";
import { Input } from "@mui/material";
import firebase from "firebase/compat/app";
import { Link } from "react-router-dom";

function Navbar() {
  const user = useSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handlenotice = (e) => {
    e.preventDefault();
    setOpenModal(false);
    db.collection("notices").add({
      notice: input,
      imageUrl: inputUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user,
    });

    setInput("");
    setInputUrl("");
  };

  return (
    <div className="navbar">
      <div className="qHeader_logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSmvtTSaq64tXfd0SDHqs_TmKUtdR3_NebA&usqp=CAU"
          alt=""
        />
      </div>

      <div className="qHeader_icons">
        <div className="qHeader_icon">
          <Link to="/">
            <Button style={{ color: "skyblue" }}>
              <Home />
            </Button>
          </Link>
        </div>

        <div className="qHeader_icon">
          <Link to="/gateuse">
            <Button style={{ color: "skyblue" }}>
              <PeopleAltIcon />
            </Button>
          </Link>
        </div>

        <div className="qHeader_icon">
          <Link to="/gateauth">
            <Button style={{ color: "skyblue" }}>
              <DoorSlidingIcon />
            </Button>
          </Link>
        </div>

        <div className="qHeader_icon">
          <Link to="/receipt">
            <Button style={{ color: "skyblue" }}>
              <NotificationsActiveIcon />
            </Button>
          </Link>
        </div>
      </div>

      <div className="qHeader_input">
      </div>

      <div className="qHeader_Rem">
        <div className="qHeader_avatar">
          <LogoutIcon onClick={() => auth.signOut()} />
        </div>
        <Button onClick={() => setOpenModal(true)}>글 쓰기</Button>

        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          shouldCloseOnoverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "transparent",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal_info">
            <Avatar src={user.photo} />
            <p>{user.displayName ? user.displayName : user.email}</p>
          </div>

          <div className="modal_Field">
            <Input
              type="text"
              placeholder="공지사항을 작성하세요"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="modal_fieldLink">
              <AttachFileIcon />
              <Input
                type="text"
                placeholder="이미지 url을 작성하세요"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
              />
            </div>
          </div>

          <div className="modal_buttons">
            <button type="text" className="add" onClick={handlenotice}>
              {" "}
              작성하기{" "}
            </button>

            <button onClick={() => setOpenModal(false)} className="can">
              닫기
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
