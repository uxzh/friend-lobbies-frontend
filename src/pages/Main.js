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
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Main() {
  const [activeButton, setActiveButton] = useState("For you");
  const {user, setUser} = useContext(UserContext)
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (activeButton) {
      case "For you":
        return (
          <DisplayForYou/>
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
              <UserInfo/>
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
