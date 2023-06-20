import React, { useState, useEffect, useCallback } from "react";
import CategoryCardsBig from "./CategoryCardsBig";
import lobbiesData from "../../data/lobbies.json";
import { Grid, Text } from "@nextui-org/react";
import LazyLoad from "react-lazy-load";
import CategoryCardsBigger from "./CategoryCardsBigger";

const DisplayPopular = () => {
  const [popularLobbies, setPopularLobbies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    fetchMoreLobbies();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function getPopularLobbies(lobbies, currentIndex, limit = 10) {
    lobbies.sort((a, b) => b.users.length - a.users.length);

    const endIndex = currentIndex + limit;
    const newLobbies = lobbies.slice(currentIndex, endIndex);

    return newLobbies;
  }

  function fetchMoreLobbies() {
    setIsFetching(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 10;
      const newLobbies = getPopularLobbies(lobbiesData, newIndex);
      setPopularLobbies((prevLobbies) => [...prevLobbies, ...newLobbies]);
      return newIndex;
    });
    setIsFetching(false);
  }

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const reachedBottom =
      windowHeight + scrollTop >= scrollHeight || scrollHeight <= windowHeight;

    if (!reachedBottom || isFetching) {
      return;
    }

    fetchMoreLobbies();
  }, [isFetching]);

  return (
    <>
      <Text h3 css={{ textAlign: "center", marginTop: "2vh" }}>
        Check out the most popular lobbies
        <br />
      </Text>
      <Text h2 css={{ textAlign: "center" }}>
        Join the fun now!
      </Text>

      <div className="flex-container">
        {popularLobbies.map((lobby, index) => {
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

export default DisplayPopular;
