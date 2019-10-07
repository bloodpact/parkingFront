import React from "react";

const DocumentItem = ({ name, childArray }) => {
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <p>{name}</p>
      </li>

      {childArray.map(el => (
        <li className="collection-item">
          <a key={el.id} href={el.webViewLink}>
            {el.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DocumentItem;
