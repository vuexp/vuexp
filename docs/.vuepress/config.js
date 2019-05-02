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
            ]
          },
          {
            title: "Components",
            collapsable: true,
            children: [
              "components/button.md",
              "components/label.md",
              "components/segmentedBar.md",
              "components/search-bar.md",
              "components/slider.md",
              "components/textfield.md",
            ]
          },
        ]
      }
    },
    dest: "./docs/.vuepress/dist",
    serviceWorker: true
  };
