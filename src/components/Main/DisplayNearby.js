import React, { useEffect } from "react";
import CategoryCardsBig from "./CategoryCardsBig";
import lobbiesData from "../../data/lobbies.json";
import { Grid, Text } from "@nextui-org/react";
import LazyLoad from "react-lazy-load";
import CategoryCardsBigger from "./CategoryCardsBigger";
import InfiniteScroll from "react-infinite-scroller";

const DisplayNearby = ({ city }) => {
  const [lobbies, setLobbies] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(true);

  useEffect(() => {
    setLobbies(getPopularLobbies(lobbiesData, city, currentIndex));
  }, [city]);

  function getPopularLobbies(lobbies, city, startIndex, limit = 10) {
    const filteredLobbies = lobbies.filter((lobby) =>
      lobby.location.startsWith(city)
    );
    filteredLobbies.sort((a, b) => b.users.length - a.users.length);

    const endIndex = startIndex + limit;
    const newLobbies = filteredLobbies.slice(startIndex, endIndex);

    setCurrentIndex(endIndex);

    if (endIndex >= filteredLobbies.length) {
      setHasMore(false);
    }

    return newLobbies;
  }

  function loadMoreLobbies() {
    const newLobbies = getPopularLobbies(lobbiesData, city, currentIndex);
    setLobbies((prevLobbies) => [...prevLobbies, ...newLobbies]);
  }

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreLobbies}
        hasMore={hasMore}
        loader={<div key={0}>Loading...</div>}
        useWindow={true}
      >
        <Text h3 css={{ textAlign: "center", marginTop: "2vh" }}>
          There are {lobbies.length} lobbies in {city}!
          <br />
          <Text h2>Explore them now</Text>
        </Text>

        <div className="flex-container">
          {lobbies.map((lobby, index) => {
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
      </InfiniteScroll>
    </>
  );
};

export default DisplayNearby;
