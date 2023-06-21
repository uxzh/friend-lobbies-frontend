import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
  Tooltip,
} from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import { useState } from "react";
import MemberData from "../components/LobbyDetailsPage/MemberData";
import WaitlistData from "../components/LobbyDetailsPage/WaitlistData";
import {
  AddUser,
  Calendar,
  ChevronRight,
  InfoSquare,
  Location,
  Search,
  Star,
} from "react-iconly";
import MainCard from "../components/Reusable/MainCard";
import lobbies from "../data/lobbies.json";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/LobbyPage.css";
import LazyLoad from "react-lazy-load";
import CategoryCardsBig from "../components/Main/CategoryCardsBig";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import useDrag from "../hooks/useDrag";

function LobbyDetailsPage() {
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

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const lobbyId = query.get("lobbyId");
  const foundLobby = lobbies.find((lobby) => lobby._id === lobbyId);
  const data = foundLobby.pictures.map((url) => ({ image: url }));

  const sameCategoryLobbies = lobbies.filter(
    (lobby) => lobby.category === foundLobby.category && lobby._id !== lobbyId
  );

  console.log(sameCategoryLobbies);

  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <MainCard
          children={
            <>
              <Row justify="center">
                <Text css={{ marginBottom: 0, textAlign: "center" }}>
                  {foundLobby.category}
                </Text>
              </Row>
              <Row justify="center">
                <Text h2 css={{ marginBottom: 0, textAlign: "center" }}>
                  {foundLobby.activity}
                </Text>
              </Row>

              <Card.Body>
                <Row justify="center">
                  {foundLobby.pictures.length > 0 && (
                    <Carousel
                      showArrows={false}
                      showStatus={false}
                      showIndicators={true}
                      infiniteLoop={true}
                      showThumbs={true}
                      autoPlay={false}
                      stopOnHover={true}
                      swipeable={true}
                      dynamicHeight={false}
                      emulateTouch={true}
                      autoFocusable={true}
                      width={400}
                    >
                      {data &&
                        data.map((item, index) => (
                          <div key={index} className="galleryContainer">
                            <img
                              className="galleryImg"
                              src={item.image}
                              alt={`Slide ${index}`}
                            />
                          </div>
                        ))}
                    </Carousel>
                  )}
                  {foundLobby.pictures.length === 0 && (
                    <Carousel
                      showArrows={false}
                      showStatus={false}
                      showIndicators={true}
                      infiniteLoop={true}
                      showThumbs={true}
                      autoPlay={false}
                      stopOnHover={true}
                      swipeable={true}
                      dynamicHeight={false}
                      emulateTouch={true}
                      autoFocusable={true}
                      width={400}
                    >
                      <div className="galleryContainer">
                        <img
                          className="galleryImg"
                          src={foundLobby.defaultPicture}
                          alt={`Slide 1`}
                        />
                      </div>
                    </Carousel>
                  )}
                </Row>
                <Spacer />
                <Row justify="center">
                  <Avatar.Group
                    count={
                      foundLobby.users.length > 5
                        ? foundLobby.users.length - 5
                        : ""
                    }
                  >
                    {foundLobby.users.slice(0, 5).map((name, index) => (
                      <Tooltip content={name} color={"invert"}>
                        <Avatar
                          key={index}
                          size="lg"
                          pointer
                          src={
                            "https://ca.slack-edge.com/T046G9D7MGU-U0470CYKK1R-904a18162ebd-512"
                          }
                          bordered
                          color="gradient"
                          stacked
                        />
                      </Tooltip>
                    ))}
                  </Avatar.Group>
                </Row>
                <Row justify="center">
                  <Text css={{ textAlign: "center" }}>
                    {foundLobby.users.length} out of {foundLobby.capacity}{" "}
                    people joined
                  </Text>
                </Row>
                <Spacer />
                <Container css={{ maxW: 600 }}>
                  {/* <Row justify="center">
                    <Text h3>About Lobby</Text>
                  </Row> */}
                  <Row>
                    <Text>
                      <Calendar
                        style={{
                          height: 16,
                          width: 16,
                          position: "relative",
                          top: 2,
                          padding: 0,
                          marginRight: 4,
                        }}
                        set="bold"
                        primaryColor="#4c8bf5"
                      />
                      <strong>Date: </strong>
                      {foundLobby.date}
                    </Text>
                  </Row>
                  <Row>
                    <Text>
                      <Location
                        set="bold"
                        primaryColor="#FF3B30"
                        style={{
                          height: 16,
                          width: 16,
                          position: "relative",
                          top: 2,
                          padding: 0,
                          marginRight: 4,
                        }}
                      />
                      <strong>Location: </strong>
                      {foundLobby.location}
                    </Text>
                  </Row>
                  <Row>
                    <Text css={{ textAlign: "justify" }}>
                      <InfoSquare
                        set="bold"
                        primaryColor="#F4B400"
                        style={{
                          height: 16,
                          width: 16,
                          position: "relative",
                          top: 2,
                          padding: 0,
                          marginRight: 4,
                        }}
                      />
                      <strong>Description: </strong>
                      {foundLobby.description}
                    </Text>
                  </Row>
                </Container>
                <Spacer y={2} />
                <Grid.Container justify="center">
                  <Button
                    color=""
                    css={{
                      color: "white",
                      backgroundColor: "$black",
                      fontWeight: "700",
                    }}
                    iconRight={<ChevronRight set="bold" />}
                  >
                    Join Lobby
                  </Button>
                </Grid.Container>
              </Card.Body>
            </>
          }
        />
        <Spacer />

        <MainCard
          children={
            <>
              <Text h3 css={{ textAlign: "center", fontWeight: 600 }}>
                Created by
              </Text>

              <Grid.Container justify="center">
                <Badge
                  content={<AddUser set="bold" />}
                  variant={"flat"}
                  color={"default"}
                  horizontalOffset={"-5%"}
                  css={{
                    cursor: "pointer",
                  }}
                >
                  <Grid>
                    <Row>
                      <Col css={{ display: "flex" }}>
                        <Badge
                          variant={"flat"}
                          content={"5.0"}
                          placement={"top-left"}
                          color={"success"}
                        >
                          <Avatar
                            src={
                              "https://ca.slack-edge.com/T046G9D7MGU-U048E1E2HME-ec532a93d7f3-72"
                            }
                            size={"lg"}
                          />
                        </Badge>
                        <div style={{ margin: "4px 0 0 12px" }}>
                          <Text h4 css={{ marginBottom: 0 }}>
                            Super Guy
                          </Text>
                          <Text h5 css={{ fontWeight: 400 }}>
                            @superpuperguy
                          </Text>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                </Badge>
              </Grid.Container>

              <Spacer y={0.4} />
              <Row justify="center">
                <Text css={{ marginBottom: 0, marginTop: 2 }} h4>
                  Rating:{" "}
                </Text>
                <Spacer x={0.3} />
                <Star set="bold" primaryColor="gold" />
                <Star set="bold" primaryColor="gold" />
                <Star set="bold" primaryColor="gold" />
                <Star set="bold" primaryColor="gold" />
                <Star set="bold" primaryColor="gold" />
              </Row>
              <Spacer y={0.2} />
              <Row justify="center">
                <small>Based on 32 reviews</small>
              </Row>
            </>
          }
        />
        <Spacer />
        <MainCard
          children={
            <>
              <Row justify="center">
                <Text h3>Recommended Lobbies</Text>
              </Row>

              <>
                <ScrollMenu
                  className="horizontal-scroll-container"
                  onWheel={onWheel}
                  onMouseDown={() => dragStart}
                  onMouseUp={() => dragStop}
                  onMouseMove={handleDrag}
                >
                  {sameCategoryLobbies.map((lobby, index) => {
                    return (
                      <LazyLoad
                        height={300}
                        offsetVertical={100}
                        debounce={false}
                        throttle={50}
                        key={index}
                      >
                        <CategoryCardsBig
                          props={lobby}
                          isDragging={dragging}
                          key={index}
                        />
                      </LazyLoad>
                    );
                  })}
                </ScrollMenu>
              </>
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

export default LobbyDetailsPage;
