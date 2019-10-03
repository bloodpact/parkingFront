import React from "react";

const NewsItem = ({ news: { title, article, date } }) => {
  return (
    <li className="collection-item">
      <h4>{title}</h4>
      <p>{article}</p>
      <p> {date}</p>
    </li>
  );
};

export default NewsItem;
