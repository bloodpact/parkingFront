import React from "react";
import PropTypes from "prop-types";
const Content = ({ backImg }) => {
  return (
    <div>
      <div className="parallax-container h400">
        <div className="parallax">
          <img alt={backImg} src={backImg} />
        </div>
      </div>
    </div>
  );
};
Content.propTypes = {
  backImg: PropTypes.string.isRequired
};
export default Content;
