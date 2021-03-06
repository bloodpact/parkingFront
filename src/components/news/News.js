import React, { createRef, useEffect } from "react";
import { connect } from "react-redux";
import NewsItem from "./NewsItem";
import Preloader from "../layout/Preloader";
import Pagination from "../layout/Pagination";
import { getNews } from "../../actions/newsActions";

const News = ({ news: { news, loading, perPage, curPage }, getNews }) => {
  useEffect(() => {
    getNews();
    //eslint-disable-next-line
  }, []);

  if (loading || news === null) {
    return <Preloader />;
  }
  const lastNewsIndex = curPage * perPage;
  const firstNewsIndex = lastNewsIndex - perPage;
  const curNews = news.slice(firstNewsIndex, lastNewsIndex);
  const ref = createRef();
  function handleClick() {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  return (
    <div className="section white">
      <div className="row container" ref={ref}>
        <h1>Новости</h1>
        <ul className="collection with-header">
          {curNews.map(newsItem => (
            <NewsItem key={newsItem._id} news={newsItem} />
          ))}
        </ul>
        <Pagination
          perPage={perPage}
          handleClick={handleClick}
          curPage={curPage}
          totalNews={news}
        />
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  news: state.news
});
export default connect(
  mapStateToProps,
  { getNews }
)(News);
