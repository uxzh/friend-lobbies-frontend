import { Card, Container, Row, Spacer } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import "../styles/Main.css";
import UserInfo from "../components/Main/UserInfo";
import DisplaySelection from "../components/Main/DisplaySelection";
import MainCard from "../components/Reusable/MainCard";
import DisplayByCategory from "../components/Main/DisplayByCategory";
import DisplayForYou from "../components/Main/DisplayForYou";
import DisplayMostPopular from "../components/Main/DisplayMostPopular ";
import DisplayNearby from "../components/Main/DisplayNearby";
import { useState } from "react";

export default function Main() {
  const [activeButton, setActiveButton] = useState("For you");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (activeButton) {
      case "For you":
        return (
          <DisplayForYou
            interests={["sport", "video gaming", "games"]}
            city="Tel Aviv"
          />
        );
      case "Most Popular":
        return <DisplayMostPopular />;
      case "Nearby":
        return <DisplayNearby city="Tel Aviv" />;
      case "By Categories":
        return <DisplayByCategory />;
      default:
        return (
          <DisplayForYou
            city="Tel Aviv"
            interests={["sport", "video gaming", "games"]}
          />
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
              <UserInfo
                imgSrc={
                  "https://ca.slack-edge.com/T046G9D7MGU-U04ALRSD91T-6a4689126259-512"
                }
                username={"Aviad the King"}
              />
              <DisplaySelection handleClick={handleClick} />
              {renderContent()}
            </>
          }
        />
      </main>
      <footer>
          <Spacer y={2}/>
      </footer>
    </>
  );
}
