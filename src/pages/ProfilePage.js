import { Button, Spacer, Text } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import "../styles/Main.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainCard from "../components/Reusable/MainCard";
import ProfileHeader from "../components/ProfilePage/ProfileHeader";
import ProfileStats from "../components/ProfilePage/ProfileStats";
import Interests from "../components/ProfilePage/Interests";
import ProfilePageHeader from "../components/ProfilePage/ProfilePageHeader";
import BioArea from "../components/ProfilePage/BioArea";
import EditProfileButton from "../components/ProfilePage/EditProfileButton";
import UserContext from "../context/UserContext";
<<<<<<< HEAD
import axios from "axios";
import SERVERURL from "../lib/SERVERURL";
=======
>>>>>>> 97ed0765dad57712fdf04fb5bcc1bb4161118941

function ProfilePage() {
  // REPLACE WITH FETCHED USER


  const {user, setUser} = useContext(UserContext)

  const userObject = {
    ...user,
    name: user.firstName,
    surname: user.lastName,
    phoneNumber: user.phone,
    profilePhoto: user.picture,
    location: user.location,
    friends: 123,
    lobbiesJoined: 14,
    lobbiesCreated: 5
  }

  if(!userObject.location){
    userObject.location = "Tel Aviv, Israel"
  }

  if(!userObject.bio){
    userObject.bio = "No bio yet. Why don't you add one?"
  }

  const [updatedName, setUpdatedName] = useState(
    userObject.name + " " + userObject.surname
  );
  const [updatedLocation, setUpdatedLocation] = useState(userObject.location);
  const [updatedBio, setUpdatedBio] = useState(userObject.bio);
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState(
    userObject.phoneNumber
  );
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedProfilePhoto, setUpdatedProfilePhoto] = useState(null)

  const navigate = useNavigate();

<<<<<<< HEAD
  const imageHandler = (images) => {
    setUpdatedProfilePhoto(images)
  }

  async function handleSubmission() {
    try{
      const data = new FormData();
      data.append("firstName", updatedUserObject.firstName);
      data.append("lastName", updatedUserObject.lastName);
      data.append("location", updatedUserObject.location);
      data.append("bio", updatedUserObject.bio);
      data.append("phoneNumber", updatedUserObject.phoneNumber);
      data.append("picture", updatedProfilePhoto[0]);
      const res = await axios.put(`${SERVERURL}/users/user`, data, {withCredentials: true})
      setIsUpdating(false);
    }catch(err){
      console.log(err)
    }
=======
  function handleSubmission() {
    // send the updated object
    const data = new FormData();
    data.append("firstName", updatedUserObject.firstName);
    data.append("lastName", updatedUserObject.lastName);
    data.append("location", updatedUserObject.location);
    data.append("bio", updatedUserObject.bio);
    data.append("phoneNumber", updatedUserObject.phoneNumber);
    data.append("profilePhoto", updatedUserObject.profilePhoto);
    setIsUpdating(false);
>>>>>>> 97ed0765dad57712fdf04fb5bcc1bb4161118941
  }

  // Split the updated input into name and surname
  let splitName = updatedName.split(" ");

  // The updated object to send to the server
  const updatedUserObject = {
    firstName: splitName[0],
    lastName: splitName.slice(1).join(" "),
    location: updatedLocation,
    bio: updatedBio,
    phoneNumber: updatedPhoneNumber
  };

  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Text h2 css={{ textAlign: "center" }}>
          Profile Page
        </Text>
        <MainCard
          children={
            <>
              <div>
                <ProfileHeader
                  userObject={userObject}
                  isUpdating={isUpdating}
                  updatedName={updatedName}
                  setUpdatedName={setUpdatedName}
                  updatedPhoneNumber={updatedPhoneNumber}
                  setUpdatedPhoneNumber={setUpdatedPhoneNumber}
                  updatedLocation={updatedLocation}
                  setUpdatedLocation={setUpdatedLocation}
                  imageHandler = {imageHandler}
                />

                <center>
                  <ProfilePageHeader
                    userObject={userObject}
                    isUpdating={isUpdating}
                    updatedName={updatedName}
                    setUpdatedName={setUpdatedName}
                    updatedPhoneNumber={updatedPhoneNumber}
                    setUpdatedPhoneNumber={setUpdatedPhoneNumber}
                    updatedLocation={updatedLocation}
                    setUpdatedLocation={setUpdatedLocation}
                  />
                </center>

                <ProfileStats userObject={userObject} />
              </div>

              <BioArea
                isUpdating={isUpdating}
                updatedBio={updatedBio}
                userObject={userObject}
                setUpdatedBio={setUpdatedBio}
              />
              <EditProfileButton
                isUpdating={isUpdating}
                handleSubmission={handleSubmission}
                setIsUpdating={setIsUpdating}
              />
            </>
          }
        />
        <Spacer />
        <MainCard
          style={{ marginTop: "2vh" }}
          children={
            <>
              <Interests userObject={userObject} />
              <Button
                light
                flat
                auto
                style={{ maxWidth: 300, margin: "auto" }}
                color=""
                onPress={() => navigate("/interest-selection")}
              >
                Change Interests?
              </Button>
            </>
          }
        ></MainCard>
      </main>
    </>
  );
}

export default ProfilePage;
