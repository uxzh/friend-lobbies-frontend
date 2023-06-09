import { Row, Text } from "@nextui-org/react";

export default function CategoryName({ name, amount }) {
  return (
    <Row style={{ marginTop: "2vh" }}>
      <Text h4>{name}</Text>
      <Text
        style={{
          lineHeight: 1.3,
          marginLeft: "0.6rem",
          color: "gray",
        }}
      >
        <strong>{amount} active</strong>
      </Text>
    </Row>
  );
}
