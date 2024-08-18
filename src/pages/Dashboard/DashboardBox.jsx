import React from "react";
import { FaUsers, FaThumbsUp, FaFileAlt, FaStar } from "react-icons/fa";

const DashboardBox = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-around gap-6 px-6">
        <div className=" w-full ">
          <div className="widget-small primary coloured-icon rounded-s-3xl">
            <div className="icon p-4 rounded-s-md">
              <FaUsers className="size-12 " />
            </div>
            <div className="info">
              <h4>Users</h4>
              <p>
                <b>5</b>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="widget-small info coloured-icon">
            <div className="icon p-4 rounded-s-md">
              <FaThumbsUp className="size-12 " />
            </div>

            <div className="info">
              <h4>Likes</h4>
              <p>
                <b>25</b>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="widget-small warning coloured-icon">
            <div className="icon p-4 rounded-s-md">
              <FaFileAlt className="size-12 " />
            </div>
            <div className="info">
              <h4>Uploades</h4>
              <p>
                <b>10</b>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="widget-small danger coloured-icon">
            <div className="icon p-4 rounded-s-md">
              <FaStar className="size-12 " />
            </div>
            <div className="info">
              <h4>Stars</h4>
              <p>
                <b>500</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBox;
