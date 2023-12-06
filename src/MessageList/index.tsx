import React from "react";
import { Flex } from "antd";
import "../Chat.css";

const messages = [
  { type: "user", message: "안녕하세요." },
  { type: "assistant", message: "네, 안녕하세요." },
  { type: "user", message: "안녕하세요." },
  { type: "assistant", message: "저는 인공지능입니다." },
  { type: "user", message: "안녕하세요." },
  { type: "assistant", message: "안녕." },
];

const MessageList: React.FC = () => {
  return (
    <div>
      {messages.map((it) => (
        <Flex justify={it.type === "user" ? "flex-end" : "flex-start"} align="center">
          <div style={{ display: "table" }}>
            <div style={{ display: "table-cell" }} className={`message ${it.type}`}>
              {it.message}
            </div>
          </div>
        </Flex>
      ))}
    </div>
  );
};

export default MessageList;
