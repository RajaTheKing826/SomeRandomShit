import React, { useState, useEffect } from "react";
import "./index.css";
export const PostsComponent = (props) => {
  const { selectedView } = props;
  const [totalData, setTotalData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [paginationNumbers, setPaginationNumber] = useState([1, 2, 3]);
  const [activePaginationNumber, setActivePaginationNumber] = useState(1);
  const [totalPagesCount, setTotalPagesCount] = useState(3);
  const [offset, setOffSet] = useState(0);
  const limit = 6;

  const onIncreasePaginationButtonClick = () => {};

  const onDecreasePaginationBUttonClick = () => {};
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
      totalData.slice(
        (activePaginationNumber - 1) * limit,
        (activePaginationNumber - 1) * limit + limit
      )
    );
  };

  const renderBarView = () => {
    return posts.map((post) => (
      <div className="bar-container">
        <div className="post-content-container">
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
        className="pagination-number"
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
          class="decrease-button"
          className="decrease-button"
        >
          decrease
        </button>
        {renderPaginationNumbers()}
        <button
          disabled={paginationNumbers[2] === totalPagesCount}
          className="increase-button"
          className="increase-button"
        >
          increase
        </button>
      </div>
    </div>
  );
};
