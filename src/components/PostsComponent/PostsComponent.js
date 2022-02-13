import React, { useState, useEffect } from "react";
import "./index.css";
export const PostsComponent = (props) => {
  const { selectedView, onPostCardClick } = props;
  const [totalData, setTotalData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [paginationNumbers, setPaginationNumber] = useState([1, 2, 3]);
  const [activePaginationNumber, setActivePaginationNumber] = useState(1);
  const [totalPagesCount, setTotalPagesCount] = useState(3);
  const [offset, setOffSet] = useState(0);
  const limit = 6;

  const onIncreasePaginationButtonClick = () => {
    if (activePaginationNumber === paginationNumbers[0]) {
      setActivePaginationNumber(paginationNumbers[1]);
    }
    setPaginationNumber([
      ...paginationNumbers.slice(1, 3),
      paginationNumbers[2] + 1,
    ]);
    setPosts(
      totalData.slice(
        (activePaginationNumber - 1) * limit,
        (activePaginationNumber - 1) * limit + limit
      )
    );
  };

  const onDecreasePaginationBUttonClick = () => {
    if (activePaginationNumber === paginationNumbers[2]) {
      setActivePaginationNumber(paginationNumbers[1]);
    }
    setPaginationNumber([
      paginationNumbers[0] - 1,
      ...paginationNumbers.slice(0, 2),
    ]);
    setPosts(
      totalData.slice(
        (activePaginationNumber - 1) * limit,
        (activePaginationNumber - 1) * limit + limit
      )
    );
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        setTotalData(data);
        setPosts(data.slice(setActivePaginationNumber - 1, 6));
        setTotalPagesCount(parseInt(data.length / 5));
      });
  }, []);

  const onPaginationNumberClick = (number) => {
    setActivePaginationNumber(number);
    setPosts(
      totalData.slice((number - 1) * limit, (number - 1) * limit + limit)
    );
  };

  const getPosts = () => {
    return totalData.slice(
      activePaginationNumber * limit,
      activePaginationNumber * limit + limit
    );
  };

  const renderBarView = () => {
    return getPosts().map((post) => (
      <div key={post.title} className="bar-container">
        <div onClick={onPostCardClick} className="post-content-container">
          <div>
            <img
              className="bar-post-image"
              src={
                "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
              }
            />
          </div>
          <div>
            <p className="title-text">{post.title}</p>
            <p className="description-text">{post.body}</p>
            <p className="date-text"></p>
          </div>
        </div>
        <div className="cross-icon-wrapper">*</div>
      </div>
    ));
  };

  const renderPaginationNumbers = () => {
    return paginationNumbers.map((number) => (
      <div
        onClick={() => {
          onPaginationNumberClick(number);
        }}
        className={
          number === activePaginationNumber
            ? "pagination-number selected-number"
            : "pagination-number"
        }
      >
        {number}
      </div>
    ));
  };

  const renderCardView = () => {};

  return (
    <div className="posts-container">
      <div className="posts-wrapper">
        {selectedView === "card" ? renderCardView() : renderBarView()}
      </div>
      <div className="pagination-wrapper">
        <button
          disabled={paginationNumbers[0] === 1}
          className="decrease-button"
          onClick={onDecreasePaginationBUttonClick}
        >
          decrease
        </button>
        {renderPaginationNumbers()}
        <button
          disabled={paginationNumbers[2] === totalPagesCount}
          className="increase-button"
          className="increase-button"
          onClick={onIncreasePaginationButtonClick}
        >
          increase
        </button>
      </div>
    </div>
  );
};
