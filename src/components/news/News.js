import React from "react";
import NewsItem from "./NewsItem";
import testNews from "../../DB";

const News = () => {
  return (
    <div className="section white">
      <div className="row container">
        <h1>Новости</h1>
        <ul className="collection with-header">
          <NewsItem news={testNews} />
        </ul>
      </div>
    </div>
  );
};

export default News;
