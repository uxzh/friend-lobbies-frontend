import { Button, Row } from "@nextui-org/react";
import { useState } from "react";
export default function DisplayCategory({ handleClick }) {
  const [activeButton, setActiveButton] = useState("For you");

  const buttons = [
    { name: "For you", marginLeft: 0 },
    { name: "Most Popular", marginLeft: 8 },
    { name: "Nearby", marginLeft: 8 },
    { name: "By Categories", marginLeft: 8 },
  ];

  return (
    <Row
      style={{ marginTop: "2vh" }}
      id="categories"
      className="horizontal-scroll-container"
    >
      {buttons.map((button) => (
        <Button
          key={button.name}
          css={{
            backgroundColor: activeButton === button.name ? "black" : "white",
            color: activeButton === button.name ? "white" : "black",
            marginLeft: button.marginLeft,
            borderColor: activeButton === button.name ? "black" : "#C5C6D0",
          }}
          onPress={() => {
            setActiveButton(button.name);
            handleClick(button.name);
          }}
          auto
          bordered
        >
          {button.name}
        </Button>
      ))}
    </Row>
  );
}
