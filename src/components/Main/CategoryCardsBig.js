import { Avatar, Badge, Card, Row, Text, Tooltip } from "@nextui-org/react";
import { Calendar, Location } from "react-iconly";
import LazyLoad from "react-lazy-load";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";
import lozad from "lozad";
import { useNavigate } from "react-router-dom";

export default function CategoryCardsBig(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!isDragging) {
      navigate(`/lobby-details?lobbyId=${_id}`);
    }
  };

  const { _id, category, activity, defaultPicture, users, location, date } =
    props.props;
  const { isDragging } = props;

  useEffect(() => {
    const observer = lozad(".lozad");
    observer.observe();
  }, []);
  return (
    <>
      <div onClick={handleClick}>
        <Card
          variant="bordered"
          css={{
            width: 260,
            padding: 4,
            marginRight: "1rem",
            borderRadius: "1.2rem",
            cursor: "pointer",
          }}
        >
          <Badge
            variant="flat"
            size={"lg"}
            content={users.length + " 👤"}
            css={{
              position: "absolute",
              right: 34,
              top: 20,
              border: 0,
              backgroundColor: "white",
            }}
          >
            <Badge
              placement="bottom-right"
              variant="flat"
              size={"lg"}
              horizontalOffset="45%"
              verticalOffset="-5%"
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
              <LazyLoad
                height={160}
                offsetVertical={100}
                debounce={false}
                throttle={50}
              >
                <LazyLoadImage
                  src={defaultPicture}
                  alt="Card image"
                  className="lozad"
                  style={{
                    width: 250,
                    height: 160,
                    objectFit: "cover",
                    borderRadius: "1rem",
                    draggable: "false",
                  }}
                  draggable="false"
                />
              </LazyLoad>
            </Badge>
          </Badge>
          <Card.Body css={{ padding: "8px 12px", margin: 0, marginTop: 8 }}>
            <Text h4 css={{ lineHeight: 1, margin: 0, height: 40 }}>
              {activity}
            </Text>
            <Text
              style={{
                maxWidth: 220,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
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
                set="curved"
                primaryColor="blueviolet"
              />
              {date}
            </Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
