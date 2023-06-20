import React, { useEffect, useState } from "react";
import CategoryCardsBigger from "./CategoryCardsBigger";
import lobbiesData from "../../data/lobbies.json";
import { Text } from "@nextui-org/react";
import LazyLoad from "react-lazy-load";

const DisplayForYou = ({ city, interests }) => {
  const [nearbyLobbies, setNearbyLobbies] = useState([]);
  const [interestLobbies, setInterestLobbies] = useState([]);
  const [randomLobbies, setRandomLobbies] = useState([]);

  useEffect(() => {
    setNearbyLobbies(getLobbiesByCity(lobbiesData, city, 4));
    setInterestLobbies(getLobbiesByInterests(lobbiesData, interests, 4));
    setRandomLobbies(getRandomLobbies(lobbiesData, 16));
  }, [city, interests]);

  function getLobbiesByCity(lobbies, city, limit) {
    const filteredLobbies = lobbies.filter((lobby) =>
      lobby.location.startsWith(city)
    );
    filteredLobbies.sort((a, b) => b.users.length - a.users.length);
    return filteredLobbies.slice(0, limit);
  }

  function getLobbiesByInterests(lobbies, interests, limit) {
    if (!interests || interests.length === 0) {
      return [];
    }

    const filteredLobbies = lobbies.filter((lobby) => {
      return (
        interests.some((interest) =>
          lobby.category.toLowerCase().includes(interest.toLowerCase())
        ) ||
        interests.some((interest) =>
          lobby.activity.toLowerCase().includes(interest.toLowerCase())
        )
      );
    });

    filteredLobbies.sort((a, b) => b.users.length - a.users.length);
    return filteredLobbies.slice(0, limit);
  }

  function getRandomLobbies(lobbies, limit) {
    const filteredLobbies = lobbies.filter((lobby) => {
      return !nearbyLobbies.includes(lobby) && !interestLobbies.includes(lobby);
    });

    // Shuffle the array randomly
    const shuffledLobbies = filteredLobbies.sort(() => Math.random() - 0.5);

    return shuffledLobbies.slice(0, limit);
  }

  const combinedLobbies = [
    ...nearbyLobbies,
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
