import React, { useState } from "react";

import SidebarUser from "./sidebar-user/SidebarUser";
import SidebarDashboard from "./sidebar-dashboard/SidebarDashboard";
import SidebarUiElements from "./sidebar-uielements/SidebarUiElements";
import SidebarCharts from "./sidebar-charts/SidebarCharts";
import SidebarForms from "./sidebar-forms/SidebarForms";
import SidebarTables from "./sidebar-tables/SidebarTables";
import SidebarPages from "./sidebar-pages/SidebarPages";
function SideBar() {
  const [showTreeview, setShowTreeview] = useState(false);
  const handleTreeview = () => {
    // Correct way to toggle the state
    setShowTreeview((prevShowTreeview) => !prevShowTreeview);
  };

  return(
    <div className="app-sidebar">
      <SidebarUser />
      <SidebarDashboard />
      <SidebarUiElements
        showTreeview={showTreeview}
      />
      <SidebarCharts />
      <SidebarForms
        showTreeview={showTreeview}

        handleTreeview={handleTreeview}
      />
      <SidebarTables
        showTreeview={showTreeview}
        handleTreeview={handleTreeview}
      />
      <SidebarPages
        showTreeview={showTreeview}
        handleTreeview={handleTreeview}
      />
    </div>
  );
}

export default SideBar;
