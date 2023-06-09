import { Card, Col, Row, Text } from "@nextui-org/react";
import React from "react";

export default function ContentCardBig() {
  return (
    <Card
      isPressable
      css={{
        w: "100%",
        h: "360px",
        boxShadow:
          "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
      }}
    >
      <Card.Header
        css={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            ⚽ sports
          </Text>
        </Col>
      </Card.Header>

      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/e8d9d222-8092-4cea-b9ed-c68673a8eaf8/nike-soccer.png"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>

      <Card.Footer
        css={{
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text h3 color="white" css={{ margin: 0 }}>
              Soccer
            </Text>
            <Text color="white">Alex and 3 more</Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
