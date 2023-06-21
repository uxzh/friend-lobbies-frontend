import { Spacer } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import "../styles/Main.css";
import MainCard from "../components/Reusable/MainCard";
import DisplayJoinedLobbies from "../components/Lobbies/DisplayJoinedLobbies";
export default function JoinedLobbies() {
  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <MainCard
          children={
            <>
              <DisplayJoinedLobbies />
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
