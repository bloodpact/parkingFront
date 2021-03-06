import React, { useEffect } from "react";
import { connect } from "react-redux";
import DocumentItem from "./DocumentItem";
import Preloader from "../layout/Preloader";
import { getDocs } from "../../actions/docActions";
import M from "materialize-css/dist/js/materialize.min";

const Documents = ({ docs: { docs, loading }, getDocs }) => {
  useEffect(() => {
    getDocs();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    M.AutoInit();
  });
  if (loading || docs === null) {
    return <Preloader />;
  }
  return (
    <div className="section white">
      <div className="row container">
        <h1 className="header">Документы</h1>

        <ul className="collapsible popout">
          {docs.map(doc => (
            <DocumentItem
              key={doc.parent.id}
              name={doc.parent.name}
              childArray={doc.child.data.files}
            />
          ))}
        </ul>
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
