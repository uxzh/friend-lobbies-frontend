import { Grid, Text } from "@nextui-org/react";
import React from "react";

const ProfileStats = ({ userObject }) => {
  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <Grid.Container style={{ marginTop: "4vh" }}>
        <Grid css={{ margin: "auto", width: "33%" }}>
          <div
            style={{
              margin: 0,
            }}
          >
            <Text css={{ margin: 0, textAlign: "center" }} h4>
              {userObject?.friends && userObject?.friends < 100
                ? userObject?.friends
                : "100+"}
            </Text>
            <Text css={{ textAlign: "center" }}>Friends</Text>
          </div>
        </Grid>
        <Grid css={{ margin: "auto", width: "33%" }}>
          <div style={{ margin: 0 }}>
            <Text css={{ margin: 0, textAlign: "center" }} h4>
              {userObject?.lobbiesJoined && userObject?.lobbiesJoined < 100
                ? userObject?.lobbiesJoined
                : "100+"}
            </Text>
            <Text css={{ textAlign: "center" }}>Lobbies Joined</Text>
          </div>
        </Grid>
        <Grid css={{ margin: "auto", width: "33%" }}>
          <div style={{ margin: 0 }}>
            <Text css={{ margin: 0, textAlign: "center" }} h4>
              {userObject?.lobbiesCreated && userObject?.lobbiesCreated < 100
                ? userObject?.lobbiesCreated
                : "100+"}
            </Text>
            <Text css={{ textAlign: "center" }}>Lobbies Created</Text>
          </div>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default ProfileStats;
