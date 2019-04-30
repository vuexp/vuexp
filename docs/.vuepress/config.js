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
            ]
          },
          {
            title: "Components",
            collapsable: true,
            children: [
              "components/label.md",
              "components/textfield.md",
              "components/textview.md",
              "components/button.md",
            ]
          },
        ]
      }
    },
    dest: "./docs/.vuepress/dist",
    serviceWorker: true
  };
  