import React, { useEffect } from "react";
import DateItems from "./DateItems";
import UserLoginForm from "./UserLoginForm";
import M from "materialize-css/dist/js/materialize.min";
import { connect } from "react-redux";
import { setLogged } from "../../actions/userActions";

export const Users = ({ user: { user, logged }, setLogged }) => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="section white">
      {logged ? (
        <DateItems userData={user} logout={setLogged} />
      ) : (
        <UserLoginForm />
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  user: state.user,
  logged: state.logged
});
export default connect(
  mapStateToProps,
  { setLogged }
)(Users);
