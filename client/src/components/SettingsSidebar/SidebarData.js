import React from 'react';
import * as MdIcons from "react-icons/md";


export const SidebarData = [
    {
        title:"Privacy",
        path: "settings/privacy",
        icon: <MdIcons.MdPrivacyTip />,
        cName: 'row'
    },
    {
        title:"Security",
        path: "settings/security",
        icon: <MdIcons.MdSecurity />,
        cName: 'row'
    },
    {
        title:"Help",
        path: "settings/help",
        icon: <MdIcons.MdHelpCenter />,
        cName: 'row'
    },
    {
        title:"Preferences",
        path: "settings/preferences",
        icon: <MdIcons.MdSettings />,
        cName: 'row'
    },
    {
        title:"Sign Out",
        path: "settings/signout",
        icon: <MdIcons.MdLogout />,
        cName: 'row'
    }
]

