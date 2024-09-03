import React, { useState } from "react";
import SidebarUser from "./sidebar-user/SidebarUser";
import SidebarDashboard from "./sidebar-dashboard/SidebarDashboard";
import SidebarUiElements from "./sidebar-uielements/SidebarUiElements";
import SidebarCharts from "./sidebar-charts/SidebarCharts";
import SidebarForms from "./sidebar-forms/SidebarForms";
import SidebarTables from "./sidebar-tables/SidebarTables";
import SidebarPages from "./sidebar-pages/SidebarPages";
function SideBar() {
  const [showTreeview, setShowTreeview] = useState("");

  return (
    <div className="top-14 left-0 fixed w-sidebar h-screen z-50 bg-[#222d32]">
      <SidebarUser />
      <SidebarDashboard />
      <SidebarUiElements
        showTreeview={showTreeview}
        setShowTreeview={setShowTreeview}
      />
      <SidebarCharts />
      <SidebarForms
        showTreeview={showTreeview}
        setShowTreeview={setShowTreeview}
      />
      <SidebarTables
        showTreeview={showTreeview}
        setShowTreeview={setShowTreeview}
      />
      <SidebarPages
        showTreeview={showTreeview}
        setShowTreeview={setShowTreeview}
      />
    </div>
  );
}

export default SideBar;
