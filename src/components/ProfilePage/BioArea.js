import { Row, Textarea } from "@nextui-org/react";

export default function BioArea({
  isUpdating,
  updatedBio,
  userObject,
  setUpdatedBio,
}) {
  return (
    <div style={{ marginTop: 64, marginBottom: "2vh" }}>
      <Row>
        {isUpdating ? (
          <Textarea
            bordered
            fullWidth
            css={{ maxW: 600, margin: "auto", height: 80 }}
            value={updatedBio}
            onChange={(e) => setUpdatedBio(e.target.value)}
            label="Bio"
          />
        ) : (
          <Textarea
            value={userObject.bio && userObject?.bio}
            label="Bio"
            fullWidth
            readOnly
            css={{ maxW: 600, margin: "auto", height: 80 }}
          />
        )}
      </Row>
    </div>
  );
}
