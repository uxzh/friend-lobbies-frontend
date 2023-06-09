import { Avatar, Row, Text } from "@nextui-org/react";
import { Search } from "react-iconly";

export default function UserInfo({ imgSrc, username }) {
  return (
    <Row id="userInfo">
      <Avatar size="xl" src={imgSrc} color="secondary" squared />
      <Text style={{ marginLeft: "1rem", lineHeight: 1.2, marginTop: 8 }}>
        Welcome back, <br />{" "}
        <strong style={{ fontSize: "1.3rem" }}>{username}</strong>
      </Text>
      <Search
        set="light"
        style={{
          position: "absolute",
          top: 12,
          right: 16,
          height: 32,
          width: 32,
        }}
      />
    </Row>
  );
}
