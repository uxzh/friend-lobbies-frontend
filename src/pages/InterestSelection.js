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
import "../styles/Interests.css";
import interests from "../data/interest_selection.json";
import { useState } from "react";
import { ArrowRightSquare } from "react-iconly";
import MainCard from "./../components/Reusable/MainCard";

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
        <MainCard
          children={
            <>
              <Row justify="center">
                <Text h3 style={{ margin: "2vh 0" }}>
                  Select your Interests
                </Text>
              </Row>
              <div className="grid-container">
                {interests.map((item, index) => {
                  return (
                    <InterestButton
                      key={index}
                      props={item}
                      onInterestSelect={handleInterestSelection}
                    />
                  );
                })}
              </div>
              <Spacer />
            </>
          }
        />
        <Button
          size={"lg"}
          auto
          iconRight={<ArrowRightSquare set="bold" />}
          style={{
            margin: "auto",
            marginTop: "8vh",
            marginBottom: "8vh",
            backgroundColor: "white",
          }}
          bordered
          color={"black"}
        >
          Continue
        </Button>
      </main>
      <footer>
          <Spacer y={2}/>
      </footer>
    </>
  );
}

export default InterestSelection;
