import React from "react";

const DocumentItem = ({ name, childArray }) => {
  return (
    <li>
      <div className="collapsible-header">
        <i className="material-icons">assignment</i>
        {name}
      </div>
      <div className="collapsible-body">
        {childArray.map(el => (
          <p key={el.id}>
            <a rel="noopener noreferrer" target="_blank" href={el.webViewLink}>
              {el.name}
            </a>
          </p>
        ))}
      </div>
    </li>
  );
};

export default DocumentItem;
