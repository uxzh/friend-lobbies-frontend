import React, { useEffect, useRef, useState } from "react";
import CategoryCardsBig from "./CategoryCardsBig";
import CategoryName from "./CategoryName";
import lobbiesData from "../../data/lobbies.json";
import useDrag from "../../hooks/useDrag";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import LazyLoad from "react-lazy-load";
import InfiniteScroll from "react-infinite-scroller";

export default function DisplayByCategory() {
  const [lobbies, setLobbies] = React.useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  function fetchMoreLobbies() {
    const limit = 10;
    const endIndex = currentIndex + limit;
    const newLobbies = lobbiesData.slice(currentIndex, endIndex);

    if (endIndex >= lobbiesData.length) {
      setHasMore(false);
    }

    setCurrentIndex(endIndex);
  }

  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  useEffect(() => {
    setLobbies(organizeByCategory(lobbiesData));
  }, []);

  function organizeByCategory(lobbies) {
    const categories = lobbies.reduce((acc, lobby) => {
      if (!acc[lobby.category]) {
        acc[lobby.category] = [];
      }

      acc[lobby.category].push(lobby);

      return acc;
    }, {});

    // Sort lobbies by date inside each category
    for (const category in categories) {
      categories[category].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });
    }

    // Sort categories based on the number of active lobbies
    const sortedCategories = Object.entries(categories).sort(
      ([, lobbiesA], [, lobbiesB]) => lobbiesB.length - lobbiesA.length
    );

    // Convert back to an object
    return sortedCategories.reduce((acc, [category, lobbies]) => {
      acc[category] = lobbies;
      return acc;
    }, {});
  }

  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY > 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY < 0) {
      apiObj.scrollPrev();
    }
  }

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchMoreLobbies}
        hasMore={hasMore}
        loader={<div key={0}>Loading...</div>}
        useWindow={true}
      >
        {Object.keys(lobbies).map((category, index) => (
          <>
            <CategoryName name={category} amount={lobbies[category].length} />

            <ScrollMenu
              className="horizontal-scroll-container"
              onWheel={onWheel}
              onMouseDown={() => dragStart}
              onMouseUp={() => dragStop}
              onMouseMove={handleDrag}
            >
              {lobbies[category].map((lobby, index) => {
                return (
                  <LazyLoad
                    height={290}
                    offsetVertical={100}
                    debounce={false}
                    throttle={50}
                    key={index}
                  >
                    <CategoryCardsBig props={lobby} isDragging={dragging} />
                  </LazyLoad>
                );
              })}
            </ScrollMenu>
          </>
        ))}
      </InfiniteScroll>
    </>
  );
}
