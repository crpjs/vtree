const MENUS = [
  {
    name: "系统管理",
    path: "/app",
    icon: "setting",
    childMenu: [
      ...{
        name: "Vue 子应用",
        path: "/vue",
        component: "views/Home",
      },
    ],
  },
];
