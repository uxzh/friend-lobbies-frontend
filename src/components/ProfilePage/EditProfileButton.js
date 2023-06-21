import { Button } from "@nextui-org/react";

export default function EditProfileButton({
  isUpdating,
  handleSubmission,
  setIsUpdating,
}) {
  return (
    <div style={{ marginTop: 48 }}>
      <div>
        {isUpdating ? (
          <Button
            auto
            onPress={handleSubmission}
            color="success"
            css={{
              fontWeight: "700",
              margin: "auto",
            }}
            flat
          >
            Save Changes
          </Button>
        ) : (
          <Button
            auto
            onPress={() => setIsUpdating(true)}
            color={isUpdating ? "success" : ""}
            css={{
              color: !isUpdating && "white",
              backgroundColor: !isUpdating && "$black",
              fontWeight: "700",
              margin: "auto",
            }}
            flat
          >
            Edit Profile
          </Button>
        )}
      </div>
    </div>
  );
}
