import React, { useEffect, useState } from "react";
import CategoryCardsBigger from "./CategoryCardsBigger";
import lobbiesData from "../../data/lobbies.json";
import { Text } from "@nextui-org/react";
import LazyLoad from "react-lazy-load";
import axios from "axios";
import SERVERURL from "../../lib/SERVERURL";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const DisplayForYou = () => {
  const [nearbyLobbies, setNearbyLobbies] = useState([]);
  const [interestLobbies, setInterestLobbies] = useState([]);
  const [randomLobbies, setRandomLobbies] = useState([]);
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    const getLobbies = async () => {
      try{
        if (user){
          const interestLobbies = await getLobbiesByInterests(4);
          console.log(interestLobbies)
          const randomLobbies = await getRandomLobbies(16);
          console.log(randomLobbies)
          setInterestLobbies(interestLobbies);
          setRandomLobbies(randomLobbies);
        }
        else{
          const randomLobbies = await getNoUser(20);
          setRandomLobbies(randomLobbies);
        }
      }catch(err){
        console.log(err)
      }
    }

    getLobbies();
  }, [user]);

  // function getLobbiesByCity(lobbies, city, limit) {
  //   const filteredLobbies = lobbies.filter((lobby) =>
  //     lobby.location.startsWith(city)
  //   );
  //   filteredLobbies.sort((a, b) => b.users.length - a.users.length);
  //   return filteredLobbies.slice(0, limit);
  // }

  async function getLobbiesByInterests(limit) {
  
    const res = await axios.get(`${SERVERURL}/lobbies/Interests`, {withCredentials: true})
    console.log(res)
    const filteredLobbies = res.data

    filteredLobbies.sort((a, b) => b.users.length - a.users.length);
    return filteredLobbies.slice(0, limit);
  }

  async function getRandomLobbies(limit) {
    const res = await axios.get(`${SERVERURL}/lobbies/NotInterests`, {withCredentials: true})
    const filteredLobbies = res.data
    // Shuffle the array randomly
    const shuffledLobbies = filteredLobbies.sort(() => Math.random() - 0.5);

    return shuffledLobbies.slice(0, limit);
  }

  async function getNoUser(amount){
    const res = await axios.get(`${SERVERURL}/lobbies/random`, {withCredentials: true})
    const filteredLobbies = res.data
    const shuffledLobbies = filteredLobbies.sort(() => Math.random() - 0.5);

    return shuffledLobbies;
  }

  const combinedLobbies = [
    // ...nearbyLobbies,
    ...interestLobbies,
    ...randomLobbies
  ];

  return (
    <>
      <Text h3 css={{ textAlign: "center", marginTop: "2vh" }}>
        Lobbies picked just for you
        <br />
        <Text h2>Discover your next favorite!</Text>
      </Text>

      <div className="flex-container">
        {combinedLobbies.map((lobby, index) => {
          return (
            <div key={index} className="flex-item">
              <LazyLoad
                height={290}
                offsetVertical={100}
                debounce={false}
                throttle={50}
              >
                <CategoryCardsBigger props={lobby} />
              </LazyLoad>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DisplayForYou;
