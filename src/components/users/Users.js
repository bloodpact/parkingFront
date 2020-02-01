import React, { useEffect } from "react";
import DateItems from "./DateItems";
import M from "materialize-css/dist/js/materialize.min";

export const Users = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="section white">
      <DateItems />
    </div>
  );
};
export default Users;
