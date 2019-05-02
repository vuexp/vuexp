module.exports = {
  title: "VueXP Documentation",
  description: "",
  base: '/vuexp/',
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
            "components/label.md",
            "components/search-bar.md",
            "components/button.md",
            "components/textfield.md",
            "components/slider.md",
            "components/segmentedBar.md",
          ]
        },
      ]
    }
  },
  dest: "./docs/.vuepress/dist",
  serviceWorker: true
};

