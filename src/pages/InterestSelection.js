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
import axios from "axios";
import SERVERURL from "../lib/SERVERURL";
import { useNavigate } from "react-router-dom";

function InterestSelection() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const navigate = useNavigate();

  const handleInterestSelection = (interest, isSelected) => {
    if (isSelected) {
      setSelectedInterests([...selectedInterests, interest]);
    } else {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    }
  };

  const updateHandler = async () => {
    try{
      const res = await axios.put(`${SERVERURL}/users`, {interests: selectedInterests}, {withCredentials: true});
      navigate("/profile-page")
    }catch(err){
      console.log(err)
    }
  }

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
          onClick={updateHandler}
        >
          Continue
        </Button>
        <Spacer y={4} />
      </main>
    </>
  );
}

export default InterestSelection;
