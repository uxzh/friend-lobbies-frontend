import React from "react";

import { Badge, Grid, Row, Text } from "@nextui-org/react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import useDrag from "../../hooks/useDrag";

const Interests = ({ userObject }) => {
  const { dragStart, dragStop, dragMove } = useDrag();
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
    <div>
      <Grid.Container>
        <Grid>
          <Row>
            <Text h4>Interests: </Text>
          </Row>
        </Grid>
      </Grid.Container>
      <div style={{ borderRadius: 0 }}>
        <Grid>
          <ScrollMenu
            onWheel={onWheel}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
            style={{ display: "flex" }}
          >
            {userObject?.interests &&
              userObject?.interests.map((interest, index) => (
                <Badge
                  style={{ marginLeft: 8 }}
                  isSquared
                  variant={"flat"}
                  css={{ backgroundColor: "$white" }}
                  key={index}
                >
                  {interest}
                </Badge>
              ))}
          </ScrollMenu>
        </Grid>
      </div>
    </div>
  );
};

export default Interests;
