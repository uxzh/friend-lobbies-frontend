import { Button, Row } from "@nextui-org/react";

export default function DisplayCategory() {
  return (
    <Row
      style={{ marginTop: "2vh" }}
      id="categories"
      className="horizontal-scroll-container"
    >
      <Button css={{ backgroundColor: "black" }} auto>
        For you
      </Button>
      <Button color="" style={{ marginLeft: 8 }} auto>
        Most Popular
      </Button>
      <Button color="" style={{ marginLeft: 8 }} auto>
        Nearby
      </Button>
      <Button color="" style={{ marginLeft: 8 }} auto>
        By Categories
      </Button>
    </Row>
  );
}
