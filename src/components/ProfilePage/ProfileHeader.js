import { Avatar, Badge, Col, Modal, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { EditSquare } from "react-iconly";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";

registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageResize
);

const ProfileHeader = ({ userObject, isUpdating, imageHandler }) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  const [images, setImages] = useState([]);

  useEffect(() => {
    imageHandler(images)
  }, [images])

  return (
    <div>
      <center>
        {isUpdating ? (
          <>
            {" "}
            <Badge
              size={"xl"}
              horizontalOffset="45%"
              verticalOffset="45%"
              css={{
                padding: 0,
                borderRadius: "0.5rem",
                height: "50%",
                width: "50%",
              }}
              content={
                <Button
                  onPress={handler}
                  auto
                  size={"lg"}
                  css={{ padding: 15, backgroundColor: "rgba(0,0,0,0.005)" }}
                >
                  <EditSquare style={{ height: 20, padding: 0 }} set="bold" />
                </Button>
              }
              color="primary"
            >
              <Col css={{ margin: "auto" }}>
                <Avatar bordered color="primary" css={{ size: "$20" }} />
              </Col>
            </Badge>
            <Modal
              closeButton
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <Modal.Body>
                <FilePond
                  allowMultiple={true}
                  maxFiles={1}
                  maxFileSize={"1MB"}
                  imagePreviewHeight={100}
                  imageResizeTargetHeight={200}
                  imageResizeMode={"contain"}
                  files={images}
                  imageTransformOutputQuality={80}
                  acceptedFileTypes="image/*"
                  onupdatefiles={(fileItems) => {
                    setImages(fileItems);
                    setImages(fileItems.map((fileItem) => fileItem.file));
                  }}
                  name="file"
                />
              </Modal.Body>
              <Modal.Footer>
                <Button auto flat color="error" onPress={closeHandler}>
                  Close
                </Button>
                <Button auto onPress={closeHandler}>
                  Continue
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        ) : (
          <Col css={{ margin: "auto" }}>
            <Avatar
              bordered
              src={userObject.profilePhoto}
              css={{ size: "$20", marginBottom: "1vh" }}
            />
          </Col>
        )}
      </center>
    </div>
  );
};

export default ProfileHeader;
