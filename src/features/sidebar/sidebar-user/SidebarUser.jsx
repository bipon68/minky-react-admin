import React from "react";
import userphoto from "../../../assests/img/profile.jpg";
function SidebarUser() {
  return (
    <div>
      <div className="flex items-center p-2 text-base text-white justify-evenly">
        <img className="rounded-full size-14" src={userphoto} alt="User" />
        <div>
          <p className="font-bold">John Doe</p>
          <p className="app-sidebar__user-designation">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarUser;
