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
              "layouts/flexbox-layout.md",
              "layouts/dock-layout.md",
              "layouts/wraplayout.md",
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
              "components/search-bar.md",
              "components/button.md",
              "components/textfield.md",
              "components/slider.md"
            ]
          },
        ]
      }
    },
    dest: "./docs/.vuepress/dist",
    serviceWorker: true
  };
