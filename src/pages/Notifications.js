import { Text } from "@nextui-org/react";
import MainCard from "../components/Reusable/MainCard";
import TopNavbar from "../components/navbar/TopNavbar";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { CloseSquare, TickSquare } from "react-iconly";
import { Badge } from "@nextui-org/react";
import Message from "../components/Reusable/Message";

export default function Notifications() {
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
                You have <strong>4</strong> new notifications
              </Text>
              {/* implement mapping through requests */}
              <div id="messagesDiv" style={{ margin: "auto", maxWidth: 600 }}>
                <Message
                  profilePhoto={
                    "https://ca.slack-edge.com/T046G9D7MGU-U048E1E2HME-ec532a93d7f3-512"
                  }
                  profileName={"superguy"}
                  type={"lobby"}
                  lobbyName={"Vegan Baking 101"}
                  lobbyID={"2021004"}
                  buttons
                />
                <Message
                  profilePhoto={
                    "https://ca.slack-edge.com/T046G9D7MGU-U048E1E2HME-ec532a93d7f3-512"
                  }
                  profileName={"superguy"}
                  type={"friend"}
                  buttons
                />
                <Message
                  profilePhoto={
                    "https://media.licdn.com/dms/image/C4E03AQHZbPJzgHv0TA/profile-displayphoto-shrink_800_800/0/1658600939911?e=1692835200&v=beta&t=XexiMKy8c-_w-dO7tX6iaarHoXWGz5RpJM9VHxhzlNs"
                  }
                  profileName={"tanya"}
                  type={"friend"}
                  buttons
                />
                <Message
                  profilePhoto={
                    "https://ca.slack-edge.com/T046G9D7MGU-U04ALRSD91T-6a4689126259-72"
                  }
                  profileName={"aviadtheking"}
                  type={"unread"}
                  lobbyName={"Sunset Photography Walk"}
                  lobbyID={"t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5"}
                />
              </div>
            </>
          }
        />
      </main>
    </>
  );
}
