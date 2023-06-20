import { Card, Row, Text } from "@nextui-org/react";
import { useState } from "react";

function InterestButton({ props, onInterestSelect }) {
  const { interest, emoji, bgcolor } = props;
  const [bgColorState, setBgColorState] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      onInterestSelect(interest, true);
    } else {
      onInterestSelect(interest, false);
    }
  };

  return (
    <Card
      className="card-width"
      variant="flat"
      isPressable
      css={{
        backgroundColor: isSelected ? bgcolor : "",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onClick={handleClick}
    >
      <Card.Body
        className="card-inner"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          justify="center"
          align="center"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            h3
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {interest}
            <br />
            <br />
            <span style={{ fontSize: "2.5rem" }}>{emoji}</span>
          </Text>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default InterestButton;
