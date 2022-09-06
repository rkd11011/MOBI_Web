import { Avatar } from '@mui/material'
import React from 'react'
import './NoticeBox.css'

function NoticeBox() {

  return (
    <div className="NoticeBox">
        <div className="NoticeBox_Info">
            <Avatar/>
            <h5>관리자</h5>
        </div>

        <div className="NoticeBox_Rimuru">
            <p>공지사항을 작성해주세요</p>
        </div>
    </div>
  )

}

export default NoticeBox