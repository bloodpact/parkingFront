import React from "react";

const NewsItem = ({ news }) => {
  return (
    <li className="collection-item">
      <h4>Новость 1</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        atque eos eum minima quibusdam! Blanditiis laudantium perspiciatis
        ratione unde veniam.
      </p>
      <span className={"right"}> 11.12.2019</span>
    </li>
  );
};

export default NewsItem;
