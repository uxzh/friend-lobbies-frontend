import { Spacer } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import "../styles/Main.css";
import MainCard from "../components/Reusable/MainCard";
import DisplayCreatedLobbies from "../components/Lobbies/DisplayCreatedLobbies";
export default function CreatedLobbies() {
  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <MainCard
          children={
            <>
              <DisplayCreatedLobbies />
            </>
          }
        />
      </main>
      <footer>
        <Spacer y={2} />
      </footer>
    </>
  );
}
