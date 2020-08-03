import React from "react";
import { Avatar } from "antd";
import styled from "styled-components";

const MsgItem = styled.div`
  padding: 5px;
  color: #eee;
`;


function Dialog(props) {
  const { list } = props;
  return (
    <React.Fragment>
      {list.map((item, i) => (
        <MsgItem key={i}>
          <Avatar
            shape="rectangle"
            size="large"
            style={{ backgroundColor: '#432371', margin: "0 5px" }}
          >
            {item.from}
          </Avatar>
          <span>{item.msg}</span>
        </MsgItem>
      ))}
    </React.Fragment>
  );
}

Dialog.propTypes = {};

export default Dialog;
