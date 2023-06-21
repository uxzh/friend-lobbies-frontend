import React, { useEffect, useState } from "react";
import CategoryCardsBigger from "./CategoryCardsBigger";
import lobbiesData from "../../data/lobbies.json";
import { Text } from "@nextui-org/react";
import LazyLoad from "react-lazy-load";
import axios from "axios";
import SERVERURL from "../../lib/SERVERURL";

const DisplayForYou = ({ user }) => {
  const [nearbyLobbies, setNearbyLobbies] = useState([]);
  const [interestLobbies, setInterestLobbies] = useState([]);
  const [randomLobbies, setRandomLobbies] = useState([]);

  useEffect(() => {
    const getLobbies = async () => {
      try{
        if (user){
          const interestLobbies = await getLobbiesByInterests(user.interests, 4);
          console.log(interestLobbies)
          const randomLobbies = await getRandomLobbies(lobbiesData, 16);
          console.log(randomLobbies)
          setInterestLobbies(interestLobbies);
          setRandomLobbies(randomLobbies);
        }
        else{
          const randomLobbies = await getRandomLobbies(lobbiesData, 20);
          setRandomLobbies(randomLobbies);
        }
      }catch(err){
        console.log(err)
      }
    }

    getLobbies();
  }, []);

  // function getLobbiesByCity(lobbies, city, limit) {
  //   const filteredLobbies = lobbies.filter((lobby) =>
  //     lobby.location.startsWith(city)
  //   );
  //   filteredLobbies.sort((a, b) => b.users.length - a.users.length);
  //   return filteredLobbies.slice(0, limit);
  // }

  async function getLobbiesByInterests(interests, limit) {
    if (!interests || interests.length === 0) {
      return [];
    }

    const res = await axios.get(`${SERVERURL}/lobbies/getInterests`, {withCredentials: true})
    console.log(res)
    const filteredLobbies = res.data

    filteredLobbies.sort((a, b) => b.users.length - a.users.length);
    return filteredLobbies.slice(0, limit);
  }

  async function getRandomLobbies(lobbies, limit) {
    const res = await axios.get(`${SERVERURL}/lobbies/NotInterests`, {withCredentials: true})
    const filteredLobbies = res.data
    // Shuffle the array randomly
    const shuffledLobbies = filteredLobbies.sort(() => Math.random() - 0.5);

    return shuffledLobbies.slice(0, limit);
  }

  const combinedLobbies = [
    // ...nearbyLobbies,
    ...interestLobbies,
    ...randomLobbies,
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
