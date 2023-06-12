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
      variant="flat"
      isPressable
      css={{
        width: "26vw",
        height: "12vh",
        margin: "auto",
        minHeight: 100,
        minWidth: 100,
        backgroundColor: isSelected ? bgcolor : "",
      }}
      onClick={handleClick}
    >
      <Card.Body>
        <Row justify="center" align="center">
          <Text
            h4
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "1vh",
            }}
          >
            {interest}
            <br />
            {emoji}
          </Text>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default InterestButton;
