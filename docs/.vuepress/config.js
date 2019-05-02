module.exports = {
    title: "VueXP Documentation",
    description: "",
    themeConfig: {
      nav: [
        { text: "Home", link: "/docs/" },
        { text: "GitHub", link: "https://github.com/vuexp/vuexp" },
      ],
      sidebar: {
        "/": [
          "",
          "getting-started",
          {
            title: "Layouts",
            collapsable: true,
            children: [
              "layouts/stacklayout.md",
              "layouts/dock-layout.md",
            ]
          },
          {
            title: "Action Bars",
            collapsable: true,
            children: [
              "components/action-bar.md",
              "components/action-item.md",
              "components/navigation-button.md",
            ]
          },
          {
            title: "Components",
            collapsable: true,
            children: [
              "components/label.md",
              "components/button.md",
              "components/textfield.md"
            ]
          },
        ]
      }
    },
    dest: "./docs/.vuepress/dist",
    serviceWorker: true
  };
  