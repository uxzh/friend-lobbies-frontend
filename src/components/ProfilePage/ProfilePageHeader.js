// ProfilePageHeader.js
import { User, Call, Location } from "react-iconly";
import { Input, Text } from "@nextui-org/react";

const ProfilePageHeader = ({
  userObject,
  isUpdating,
  updatedName,
  setUpdatedName,
  updatedPhoneNumber,
  setUpdatedPhoneNumber,
  updatedLocation,
  setUpdatedLocation,
}) => {
  return (
    <>
      <div>
        {isUpdating ? (
          <Input
            css={{ marginTop: "2vh", maxWidth: 300 }}
            bordered
            contentLeft={
              <User set="bold" style={{ height: 14, color: "#4285F4" }} />
            }
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
        ) : (
          <Text h3 css={{ marginTop: "2vh" }}>
            {userObject.name + " " + userObject.surname}
          </Text>
        )}
      </div>
      <div>
        {isUpdating ? (
          <Input
            css={{ maxWidth: 300, marginTop: "1vh" }}
            bordered
            contentLeft={
              <Call set="bold" style={{ height: 14, color: "#4285F4" }} />
            }
            value={updatedPhoneNumber}
            onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
          />
        ) : (
          <Text>{userObject.phoneNumber}</Text>
        )}
      </div>
      <div>
        {isUpdating ? (
          <Input
            css={{ marginTop: "1vh", maxWidth: 300 }}
            contentLeft={
              <Location set="bold" style={{ height: 14, color: "red" }} />
            }
            bordered
            value={updatedLocation}
            onChange={(e) => setUpdatedLocation(e.target.value)}
          />
        ) : (
          <Text>
            <Location set="bold" style={{ height: 14, color: "red" }} />
            {userObject.location}
          </Text>
        )}
      </div>
    </>
  );
};

export default ProfilePageHeader;
