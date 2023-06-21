import {
  Avatar,
  Badge,
  Button,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import BGsvg from "../assets/BGsvg";
import "../styles/Main.css";

import MainCard from "../components/Reusable/MainCard";
import interest_selection from "../data/interest_selection.json";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useEffect } from "react";
import useDrag from "../hooks/useDrag";
import { useNavigate } from "react-router-dom";
import { Location } from "react-iconly";

function ProfilePage() {
  const navigate = useNavigate();

  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY > 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY < 0) {
      apiObj.scrollPrev();
    }
  }

  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Text h2 css={{ textAlign: "center" }}>
          Profile Page
        </Text>
        <MainCard
          children={
            <>
              <Grid.Container>
                <Grid style={{ width: "100%" }}>
                  <Row>
                    <Col css={{ margin: "auto" }}>
                      <Avatar
                        src="https://ca.slack-edge.com/T046G9D7MGU-U04ALRSD91T-6a4689126259-512"
                        css={{ size: "$20", margin: "auto" }}
                      />
                    </Col>
                  </Row>
                  <center>
                    <Text h3 css={{ marginTop: "2vh" }}>
                      Aviad The King
                    </Text>

                    <Text>
                      <Location
                        set="bold"
                        style={{ height: 14, color: "red" }}
                      />
                      Tel Aviv, Israel{" "}
                    </Text>
                  </center>

                  {/* <Row justify="center">
                    <div
                          style={{
                            margin: 0,
                            marginRight: "4vw",
                            marginLeft: "2vw",
                          }}
                        >
                          <Text css={{ margin: 0, textAlign: "center" }} h4>
                            100+
                          </Text>
                          <Text css={{ textAlign: "center" }}>Friends</Text>
                        </div>
                        <div style={{ margin: 0, marginRight: "4vw" }}>
                          <Text css={{ margin: 0, textAlign: "center" }} h4>
                            14
                          </Text>
                          <Text css={{ textAlign: "center" }}>Lobbies</Text>
                        </div>
                        <div style={{ margin: 0, marginRight: "4vw" }}>
                          <Text css={{ margin: 0, textAlign: "center" }} h4>
                            23
                          </Text>
                          <Text css={{ textAlign: "center" }}>Achievements</Text>
                        </div>
                        <div style={{ margin: 0, marginRight: "4vw" }}>
                          <Text css={{ margin: 0, textAlign: "center" }} h4>
                            12
                          </Text>
                          <Text css={{ textAlign: "center" }}>
                            Lobbies Joined
                          </Text>
                        </div>
                        <div style={{ margin: 0, marginRight: "4vw" }}>
                          <Text css={{ margin: 0, textAlign: "center" }} h4>
                            5
                          </Text>
                          <Text css={{ textAlign: "center" }}>
                            Lobbies Created
                          </Text>
                        </div>
                  </Row> */}

                {/* <Row justify="center" style={{marginLeft: "1vw"}}>
                  <Grid.Container style={{ marginTop: "4vh" }}>
                    <Grid css={{ margin: "auto" }} justify="center">
                      <div
                        style={{
                          margin: 0,
                          marginRight: "4vw",
                          marginLeft: "2vw",
                        }}
                      >
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          100+
                        </Text>
                        <Text css={{ textAlign: "center" }}>Friends</Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }} justify="center">
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          14
                        </Text>
                        <Text css={{ textAlign: "center" }}>Lobbies</Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }} justify="center">
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          23
                        </Text>
                        <Text css={{ textAlign: "center" }}>Achievements</Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }} justify="center">
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          12
                        </Text>
                        <Text css={{ textAlign: "center" }}>
                          Lobbies Joined
                        </Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }} justify="center">
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          5
                        </Text>
                        <Text css={{ textAlign: "center" }}>
                          Lobbies Created
                        </Text>
                      </div>
                    </Grid>
                  </Grid.Container>
                </Row> */}
                
                  <Grid.Container style={{ marginTop: "4vh" }}>
                    <Grid css={{ margin: "auto" }}>
                      <div
                        style={{
                          margin: 0,
                          marginRight: "4vw",
                          marginLeft: "2vw",
                        }}
                      >
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          100+
                        </Text>
                        <Text css={{ textAlign: "center" }}>Friends</Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }}>
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          14
                        </Text>
                        <Text css={{ textAlign: "center" }}>Lobbies</Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }}>
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          23
                        </Text>
                        <Text css={{ textAlign: "center" }}>Achievements</Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }}>
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          12
                        </Text>
                        <Text css={{ textAlign: "center" }}>
                          Lobbies Joined
                        </Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }}>
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          5
                        </Text>
                        <Text css={{ textAlign: "center" }}>
                          Lobbies Created
                        </Text>
                      </div>
                    </Grid>
                  </Grid.Container>
                 


                  <Spacer style={{ width: "100%" }} y={2} />
                  <Row></Row>
                  <Text
                    css={{ textAlign: "justify", margin: "auto", maxW: 600 }}
                  >
                    <h4 css={{ margin: 0 }}>Bio:</h4>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </Text>
                </Grid>
                <Spacer y={4} />
                <Button
                  auto
                  color=""
                  css={{
                    color: "white",
                    backgroundColor: "$black",
                    fontWeight: "700",
                    margin: "auto",
                  }}
                >
                  Change Information
                </Button>
              </Grid.Container>
            </>
          }
        />
        <Spacer />
        <MainCard
          style={{ marginTop: "2vh" }}
          children={
            <>
              <Grid.Container>
                <Grid>
                  <Row>
                    <Text h4>Interests: </Text>
                  </Row>
                </Grid>
              </Grid.Container>

              <Grid>
                <ScrollMenu
                  onWheel={onWheel}
                  onMouseDown={() => dragStart}
                  onMouseUp={() => dragStop}
                  onMouseMove={handleDrag}
                  style={{ display: "flex" }}
                >
                  {interest_selection.map((interest, index) => (
                    <Badge
                      style={{ marginRight: 8 }}
                      isSquared
                      variant={"flat"}
                      css={{ backgroundColor: "$white" }}
                      key={index}
                    >
                      {interest.interest}
                    </Badge>
                  ))}
                </ScrollMenu>
              </Grid>
              <Button
                light
                flat
                auto
                color=""
                onPress={() => navigate("/interest-selection")}
              >
                Change Interests?
              </Button>
            </>
          }
        ></MainCard>
      </main>
      <footer>
          <Spacer y={2}/>
      </footer>
    </>
  );
}

export default ProfilePage;
