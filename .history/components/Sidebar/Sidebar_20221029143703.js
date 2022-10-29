import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <h2>Kushagra</h2>
          </div>
        </div>

        <div className="sidebar__bottom">
          <Image src="/favicon.ico" alt="avatar not found sidebar.js" width="50" height="50" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
