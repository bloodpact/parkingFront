import React from "react";
import Moment from "react-moment";
import "moment/locale/ru";

const NewsItem = ({ news: { title, article, date } }) => {
  return (
    <li className="collection-item">
      <h4>{title}</h4>
      <p>{article}</p>
      <Moment locale="ru" format="DD MMMM YYYY">
        {date}
      </Moment>
    </li>
  );
};

export default NewsItem;
