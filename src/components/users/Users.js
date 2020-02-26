import React, { useEffect } from "react";
import DateItems from "./DateItems";
import UserLoginForm from "./UserLoginForm";
import M from "materialize-css/dist/js/materialize.min";
import { connect } from "react-redux";
import { logUser } from "../../actions/userActions";

export const Users = ({ user: { user, logged }, logUser }) => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="section white">
      {logged ? <DateItems /> : <UserLoginForm />}
    </div>
  );
};
const mapStateToProps = state => ({
  user: state.user,
  logged: state.logged
});
export default connect(
  mapStateToProps,
  { logUser }
)(Users);
