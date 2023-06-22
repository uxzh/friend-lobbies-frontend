import { Avatar, Button, Text, Tooltip } from "@nextui-org/react";
import axios from "axios";
import { CloseSquare, TickSquare } from "react-iconly";
import { useNavigate } from "react-router-dom";
import SERVERURL from "../../lib/SERVERURL";

export default function Message({
  reply,
  profilePhoto,
  profileName,
  type,
  lobbyName,
  lobbyID,
  buttons,
  message,
  _id
}) {
  const navigate = useNavigate();

  const acceptHandler = async () => {
    try{
      const res = await axios.put(`${SERVERURL}/users/acceptInvite/${_id}`)
      if (type === "lobby")
      navigate(`/lobby-details?lobbyId=${lobbyID}`)
    }catch(err){
      console.log(err)
    }
  }

  const denyHandler = async () => {
    try{
      const res = await axios.put(`${SERVERURL}/users/denyInvite/${_id}`)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: reply ? "row-reverse" : "row",
      }}
    >
      <Tooltip content={"@" + profileName} color="invert">
        <Avatar bordered color="primary" src={profilePhoto} />
      </Tooltip>

      <Text
        blockquote
        css={{
          marginBottom: 8,
          padding: message && 12,
          width: !message && "100%",
          backgroundColor: message && "white",
          borderRadius:
            (reply && " 1.5rem 0.6rem 1.5rem 1.5rem") ||
            (message && "0.6rem 1.5rem 1.5rem 1.5rem"),
          border: message && "1px solid lightgray",
        }}
      >
        <div>
          {profileName && !message && <strong>@{profileName}</strong>}{" "}
          {type === "lobby" && "has sent you a request to join "}
          {type === "friend" && "has sent you a friend request "}
          {type === "unread" && "left a message in the lobby "}
          {type === "message" && message}
          {lobbyName && (
            <strong
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/lobby-details?lobbyId=${lobbyID}`)}
            >
              {lobbyName}
            </strong>
          )}
        </div>
        {buttons && (
          <div
            style={{
              display: "flex",
              float: "right",
              gap: 12,
              marginTop: "1vh",
            }}
          >
            <>
              <Button
                auto
                size={"sm"}
                iconRight={<TickSquare set="bold" />}
                color="success"
                flat
                onClick={acceptHandler}
              >
                Accept
              </Button>
              <Button
                auto
                size={"sm"}
                color="error"
                iconRight={<CloseSquare set="bold" />}
                flat
                onClick={denyHandler}
              >
                Deny
              </Button>
            </>
          </div>
        )}
      </Text>
    </div>
  );
}
