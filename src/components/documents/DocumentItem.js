import React from "react";

const DocumentItem = ({ link, name }) => {
  return (
    <li className="collection-item">
      <a href={link}>{name}</a>
    </li>
  );
};

export default DocumentItem;
