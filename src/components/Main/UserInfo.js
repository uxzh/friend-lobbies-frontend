import { Avatar, Button, Container, Input, Row, Text } from "@nextui-org/react";
import { Search } from "react-iconly";
import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
export default function UserInfo() {
  const [inputVisible, setInputVisible] = useState(false);
  const {user, setUser} = useContext(UserContext);
  const handleButtonClick = () => {
    setInputVisible(true);
  };
  const handleInputBlur = () => {
    setInputVisible(false);
  };
  return (
    <Row id="userInfo">
      {user ? <Avatar
        size="xl"
        src={user.picture}
        color="secondary"
        squared
        className={inputVisible ? "welcome-info" : ""}
      /> : <></>}
      <Text
        className={inputVisible ? "welcome-info" : ""}
        style={{ marginLeft: "1rem", lineHeight: 1.2, marginTop: 8 }}
      >
        {user ? `@${user.username}` : ""} <br />
        <strong style={{ fontSize: "1.3rem" }}>{user ? user.firstName : "Welcome to Friendzone!"}</strong>
      </Text>
      {!inputVisible && (
        <Button
          color={"secondary"}
          size={"lg"}
          bordered
          style={{
            position: "absolute",
            top: 4,
            right: 8,
            height: 52,
            width: 52,
            padding: 4,
            color: "black",
            borderColor: "lightgray",
          }}
          onPress={handleButtonClick}
          auto
        >
          <Search set="light" />
        </Button>
      )}
      {inputVisible && (
        <div style={{ position: "absolute", right: 8, top: 4 }}>
          <Input
            contentRight={<Search set="light" />}
            bordered
            size="xl"
            placeholder="xLarge"
            autoFocus
            css={{ width: "100%" }}
            onBlur={handleInputBlur}
            aria-label="input-search"
          />
        </div>
      )}
    </Row>
  );
}
