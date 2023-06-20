import { Badge, Card, Text } from "@nextui-org/react";

export default function LobbyCard({ badgeContent, cardImgSrc, cardText }) {
  return (
    <div>
      <Card
        isPressable
        isHoverable
        variant="bordered"
        css={{ width: 160, padding: 4, marginRight: "1rem" }}
      >
        <Badge
          variant="flat"
          size={"lg"}
          content={badgeContent}
          css={{ right: 38, top: 20 }}
        >
          <Card.Image
            src={cardImgSrc}
            css={{
              height: 160,
              width: 160,
              objectFit: "cover",
              borderRadius: "1rem",
            }}
          />
        </Badge>
        <Card.Body css={{ padding: "8px 8px", margin: 0 }}>
          <Text h4 css={{ lineHeight: 1, margin: 0, maxWidth: 140 }}>
            {cardText}
          </Text>
          {/* <Text color="gray">{truncatedCardCat}</Text> */}
        </Card.Body>
      </Card>
    </div>
  );
}
