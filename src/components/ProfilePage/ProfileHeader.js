import { Avatar, Badge, Col } from "@nextui-org/react";
import React from "react";
import { EditSquare } from "react-iconly";

const ProfileHeader = ({ userObject, isUpdating }) => {
  return (
    <div>
      <center>
        {isUpdating ? (
          <Badge
            size={"xl"}
            horizontalOffset="45%"
            verticalOffset="45%"
            css={{
              padding: 0,
              borderRadius: "0.5rem",
              height: "50%",
              width: "50%",
            }}
            content={<EditSquare set="bold" />}
            color="primary"
          >
            <Col css={{ margin: "auto" }}>
              <Avatar
                bordered
                color="primary"
                src={userObject.profilePhoto}
                css={{ size: "$20" }}
              />
            </Col>
          </Badge>
        ) : (
          <Col css={{ margin: "auto" }}>
            <Avatar
              bordered
              src={userObject.profilePhoto}
              css={{ size: "$20", marginBottom: "1vh" }}
            />
          </Col>
        )}
      </center>
    </div>
  );
};

export default ProfileHeader;
