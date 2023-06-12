import {
  Button,
  Card,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import "../styles/Main.css";
import InterestButton from "../components/InterestSelection/InterestButton";

import interests from "../data/interest_selection.json";
import { useState } from "react";
import { ArrowRightSquare } from "react-iconly";

function InterestSelection() {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestSelection = (interest, isSelected) => {
    if (isSelected) {
      setSelectedInterests([...selectedInterests, interest]);
    } else {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    }
  };

  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Container sm>
          <Card style={{ marginBottom: "12vh" }}>
            <Row justify="center">
              <Text h3 style={{ margin: "2vh 0" }}>
                Select your Interests
              </Text>
            </Row>
            <Grid.Container justify="center" gap={1} wrap="wrap">
              {interests.map((item, index) => {
                return (
                  <Grid
                    xs
                    alignItems="center"
                    alignContent="center"
                    key={index}
                  >
                    <InterestButton
                      props={item}
                      onInterestSelect={handleInterestSelection}
                    />
                  </Grid>
                );
              })}
            </Grid.Container>
            <Spacer />
          </Card>
          <Button
            size={"lg"}
            auto
            iconRight={<ArrowRightSquare set="bold" />}
            style={{ margin: "auto" }}
          >
            Continue
          </Button>
        </Container>
      </main>
    </>
  );
}

export default InterestSelection;
