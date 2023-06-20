import { Card, Container } from "@nextui-org/react";

export default function MainCard({ children, bg }) {
  return (
    <Container sm css={{ padding: "0 12px" }}>
      <Card css={{ $$cardColor: "white" }}>
        <Card.Body
          style={{
            backgroundImage: bg ? `url(${bg})` : "",
          }}
        >
          {children}
        </Card.Body>
      </Card>
    </Container>
  );
}
