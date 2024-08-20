import React from "react";
import userphoto from "../../../assests/img/profile.jpg";
function SidebarUser() {
  return (
    <div>
      <div className="app-sidebar__user">
        <img className="size-14 rounded-full" src={userphoto} alt="User" />
        <div>
          <p className="app-sidebar__user-name">John Doe</p>
          <p className="app-sidebar__user-designation">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarUser;
