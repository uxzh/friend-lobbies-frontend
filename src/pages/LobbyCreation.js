import {
  Button,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import React, { useState } from "react";
import MainCard from "../components/Reusable/MainCard";
import "../styles/Create-Lobby.css";
import DropdownCategory from "../components/CreateLobby/DropdownCategory";
import CategoryCardsBigger from "../components/Main/CategoryCardsBigger";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import axios from "axios";
import SERVERURL from "../lib/SERVERURL";

registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageResize
);

function LobbyCreation() {
  const [category, setCategory] = useState(new Set(["Category"]));
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [images, setImages] = useState([]);

  // console.log(images);
  const submitHandler = async () => {
<<<<<<< HEAD
    try{
      const data = new FormData()
      const timestring = date + "T" + time + ":00.000+02:00"
      const timestamp = new Date(timestring).toISOString()
      data.append("category", category.currentKey)
      data.append("name", title)
      data.append("description", description)
      data.append("date", timestamp)
      data.append("location", location)
      data.append("capacity", capacity)
      for (const image of images) {
        data.append("pictures", image);
      }
      const res = await axios.post(`${SERVERURL}/lobbies/`, data, {withCredentials: true})
      console.log(res.data)
    }catch(err){
      console.log(err)
=======
    try {
      const timestring = date + "T" + time + ":00.000+02:00";
      const timestamp = new Date(timestring).toISOString();
      const res = await axios.post(
        `${SERVERURL}/lobbies/`,
        {
          category: category.currentKey,
          name: title,
          description,
          date: timestamp,
          location,
          capacity,
          images,
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
>>>>>>> 5ef9d48f31aea96dbcd18303dd31f66177c1a458
    }
  };

  console.log(images);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const newLobby = {
    activity: title ? title : "Your lobby title goes here...",
    location: location ? location : "Location of your event",
    date: date ? date : "Let's pick the date",
    capacity: "7",
    pictures: images,
    users: [],
    defaultPicture: category.currentKey
      ? `https://source.unsplash.com/random/?${category.currentKey
          .replace(/\s/g, ",")
          .slice(0, -2)}`
      : "https://imgur.com/RFXVt9X.png",
  };

  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <MainCard
          children={
            <>
              <div style={{ textAlign: "center" }}>
                <Text h2>Create Lobby</Text>
                <Text h3>What is your Interest?</Text>
                <center>
                  <DropdownCategory
                    selected={category}
                    setSelected={setCategory}
                    type={"single"}
                  />
                </center>
              </div>
              <div
                style={{
                  margin: "auto",
                  marginTop: "4vh",
                  width: "100%",
                  padding: "0 2vw",
                  maxWidth: 800,
                }}
              >
                <center>
                  <Input
                    css={{ width: "97%", textAlign: "left" }}
                    clearable
                    label="Lobby Title"
                    placeholder="What is this lobby called?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Textarea
                    css={{ width: "97%", marginTop: "1vh", textAlign: "left" }}
                    clearable
                    label="Lobby Description"
                    placeholder="What is this lobby about?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </center>

                <div style={{ marginTop: "0.6vh" }}>
                  <Grid.Container>
                    <Input
                      type="date"
                      css={{ margin: 8 }}
                      label="Date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <Input
                      type="time"
                      label="Time"
                      css={{ margin: 8 }}
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                    <Input
                      label="Location"
                      placeholder="Where will you meet?"
                      aria-label="Location"
                      css={{ margin: 8 }}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    {/* Have to limit user up to 3 digits */}
                    <Input
                      label="Capacity"
                      css={{ margin: 8, width: 96 }}
                      type="number"
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                    />
                  </Grid.Container>
                  <small style={{ marginLeft: 10, color: "gray" }}>
                    If no images were uploaded, default category image will be
                    used instead
                  </small>
                  <FilePond
                    allowMultiple={true}
                    maxFiles={5}
                    maxFileSize={"2MB"}
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
                </div>
                <div>
                  <Text h3 css={{ textAlign: "center", marginTop: "2vh" }}>
                    This is how your Lobby is going to look
                  </Text>
                  <div style={{ maxWidth: 400, width: "100%", margin: "auto" }}>
                    <CategoryCardsBigger props={newLobby} />
                  </div>
                </div>
                <center>
                  <Text h3 css={{ textAlign: "center", marginTop: "3vh" }}>
                    Happy with the results?
                  </Text>
                  <Button
                    color=""
                    css={{
                      color: "white",
                      backgroundColor: "$black",
                      fontWeight: "700",
                    }}
                    onClick={submitHandler}
                  >
                    Submit
                  </Button>
                </center>
              </div>
            </>
          }
        />
      </main>
      <footer>
        <Spacer y={2} />
      </footer>
    </>
  );
}

export default LobbyCreation;
