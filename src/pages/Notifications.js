import { Text } from "@nextui-org/react";
import MainCard from "../components/Reusable/MainCard";
import TopNavbar from "../components/navbar/TopNavbar";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { CloseSquare, TickSquare } from "react-iconly";
import { Badge } from "@nextui-org/react";
import Message from "../components/Reusable/Message";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Notifications() {
  const {user, setUser} = useContext(UserContext)
  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <MainCard
          children={
            <>
              <Text
                h3
                style={{ fontWeight: 400, margin: "auto", marginBottom: "4vh" }}
              >
                You have <strong>{user.invites.length}</strong> new notifications
              </Text>
              {/* implement mapping through requests */}
              <div id="messagesDiv" style={{ margin: "auto", maxWidth: 600 }}>
                {user.invites.map((invite) => {
                  return (
                    <Message
                      profilePhoto={invite.picture}
                      profileName={invite.username}
                      type={invite.type}
                      lobbyName={"a Lobby"}
                      lobbyID={invite.reference}
                      _id={invite._id}
                      buttons
                    />
                  );
                })}
              </div>
            </>
          }
        />
      </main>
    </>
  );
}
