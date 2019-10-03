import React, { useEffect } from "react";
import { connect } from "react-redux";
import DocumentItem from "./DocumentItem";
import Preloader from "../layout/Preloader";
import { getDocs } from "../../actions/docActions";

const Documents = ({ docs: { docs, loading }, getDocs }) => {
  useEffect(() => {
    getDocs();
  }, []);
  if (loading || docs === null) {
    return <Preloader />;
  }
  return (
    <div className="section white">
      <div className="row container">
        <h1 className="header">Документы</h1>
        {docs.map(doc => (
          <DocumentItem name={doc.name} link={doc.link} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  docs: state.docs
});
export default connect(
  mapStateToProps,
  { getDocs }
)(Documents);
