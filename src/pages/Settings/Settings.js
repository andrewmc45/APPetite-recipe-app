import React from "react";
import SettingsRoutes from "../Settings/SettingsRoutes";
import Sidebar from "../../components/SettingsSidebar/Sidebar";

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <Sidebar/>
      <SettingsRoutes/>
    </div>
  );
};

export default Settings;
