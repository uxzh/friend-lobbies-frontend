import { Badge, Card, Row, Text } from "@nextui-org/react";

export default function CategoryCardsBig(props) {
  const {badgeContent, cardImgSrc, cardText, cardCat} = props.props
  return (
    <>
      <div>
        <Card
          isPressable
          isHoverable
          variant="bordered"
          css={{ width: 260, padding: 4, marginRight: "1rem" }}
        >
          <Badge
            variant="flat"
            size={"lg"}
            content={badgeContent}
            css={{ right: 40, top: 20 }}
          >
            <Card.Image
              src={cardImgSrc}
              css={{
                height: 160,
                width: 280,
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </Badge>
          <Card.Body css={{ padding: "8px 12px", margin: 0 }}>
            <Text h3 css={{ lineHeight: 1, margin: 0 }}>
              {cardText}
            </Text>
            <Text color="gray">{cardCat}</Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
