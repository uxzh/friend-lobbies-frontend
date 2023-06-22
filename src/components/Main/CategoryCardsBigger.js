import {
  Avatar,
  Badge,
  Card,
  Col,
  Row,
  Text,
  Tooltip
} from "@nextui-org/react";
import { Calendar, Location, User } from "react-iconly";
import { useNavigate } from "react-router-dom";

export default function CategoryCardsBigger(props) {
  const { _id, activity, defaultPicture, users, location, date, pictures, isActive = true } =
    props.props;

  function getImageSrc() {
    if (!props.images || props.images.length === 0) {
      return defaultPicture;
    }

    const firstImage = props.images[0];

    if (firstImage instanceof File) {
      return URL.createObjectURL(firstImage);
    } else {
      return firstImage;
    }
  }

  const navigate = useNavigate();

  const handleClick = () => {
    console.log(isActive)
    if(isActive){
    navigate(`/lobby-details?lobbyId=${_id}`);
    }
  };

  return (
    <>
      <Card
        onClick={handleClick}
        css={{ bg: "$white", w: "100%", h: 280, maxW: 660, cursor: "pointer" }}
      >
        <Card.Header
          onClick={handleClick}
          css={{
            position: "absolute",
            top: 0,
            background: "linear-gradient(to top, transparent 0%, black 160%)",

            padding: "8px",
            paddingBottom: "46px",
          }}
        >
          <Col>
            <Text
              h4
              css={{
                lineHeight: 1,
                margin: 0,
                height: 40,
                color: "white",
                textShadow: "2px 2px 4px #000000",
              }}
            >
              {activity}
            </Text>
          </Col>
        </Card.Header>

        <Card.Image
          onClick={handleClick}
          src={getImageSrc()}
          width="100%"
          height={340}
          objectFit="cover"
          alt="Card image background"
          css={{ borderRadius: "1rem" }}
        />

        <Badge
          placement="top-right"
          variant="flat"
          size={"lg"}
          horizontalOffset="45%"
          verticalOffset="-10%"
          content={
            <>
              <Tooltip content="@username">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  size="sm"
                />
              </Tooltip>
            </>
          }
          css={{
            border: 0,
            backgroundColor: "white",
            padding: 4,
          }}
        >
          <Card.Footer
            onClick={handleClick}
            css={{ display: "inline-table", padding: "2px 12px" }}
          >
            <Row>
              <Text
                style={{
                  // maxWidth: 220,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  marginTop: "6px",
                }}
              >
                <Location
                  set="curved"
                  primaryColor="#FF3B30"
                  style={{
                    height: 14,
                    width: 14,
                    position: "relative",
                    top: 2,
                    padding: 0,
                    marginRight: 4,
                  }}
                />
                {location}
              </Text>
            </Row>
            <Row>
              <Col css={{ width: "55%" }}>
                <Text>
                  <Calendar
                    style={{
                      height: 14,
                      width: 14,
                      position: "relative",
                      top: 2,
                      padding: 0,
                      marginRight: 4,
                    }}
                    set="bold"
                    primaryColor="#4c8bf5"
                  />
                  {date}
                </Text>
              </Col>
              <Col css={{ width: "45%" }}>
                {" "}
                <Text css={{ float: "right", marginRight: 4 }}>
                  <User
                    color="#4c8bf5 "
                    set="bold"
                    style={{
                      height: 14,
                      width: 14,
                      position: "relative",
                      top: 2,
                      padding: 0,
                      marginRight: 4,
                    }}
                  />
                  {!users.length ? "0" : users.length}
                </Text>
              </Col>
            </Row>
          </Card.Footer>
        </Badge>
      </Card>
    </>
  );
}
