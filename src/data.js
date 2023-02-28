export const menuLinks = [
  {
    name: "Dashboard",
    pathname: "/dashboard",
    to: "/dashboard",
    isSubMenu: false
  },
  {
    name: "Device Management",
    pathname: "/deviceManagement",
    to: "/deviceManagement",
    isSubMenu: false
  },
  {
    name: "User Management",
    pathname: "/userManagement",
    to: "/userManagement",
    isSubMenu: false
  },
  {
    name: "UI Elements",
    pathname: "/UIElements",
    to: "/UIElements",
    isSubMenu: false
  },
  {
    name: "Sample Menu",
    pathname: "",
    to: "",
    isSubMenu: true,
    subMenu: [
      {
        name: "Level-2",
        pathname: "",
        to: "/level-2",
        isSubMenu: false
      },
      {
        name: "Level-21",
        pathname: "/",
        to: "/level-2",
        isSubMenu: false
      },
      {
        name: "Level-22",
        pathname: "/",
        to: "",
        isSubMenu: true,
        subMenu: [
          {
            name: "Level-31",
            pathname: "/",
            to: "/level2",
            isSubMenu: false
          },
          {
            name: "Level-32",
            pathname: "/",
            to: "/level2",
            isSubMenu: false
          }
        ]
      }
    ]
  }
];
