import { Row, Text } from "@nextui-org/react";

export default function CategoryName({ name, amount }) {
  return (
    <Row style={{ marginTop: "2vh" }}>
      <Text h3>{name}</Text>
      <Text
        style={{
          marginLeft: "0.6rem",
          color: "gray",
        }}
      >
        {amount && (
          <Text color="#303030">
            <strong>{amount}</strong> active lobbies
          </Text>
        )}
      </Text>
    </Row>
  );
}
