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
            "layouts/absolute-layout.md",
            "layouts/dock-layout.md",
            "layouts/flexbox-layout.md",
            "layouts/grid-layout.md",
            "layouts/stacklayout.md",
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
            "components/button.md",
            "components/switcher.md",
            "components/search-bar.md",
            "components/textfield.md",
            "components/scrollview.md",
            "components/slider.md",
            "components/webview.md",
            "components/textview.md",
            "components/frame.md",
            "components/page.md",
            "components/progress.md",
            "components/segmented-bar.md",
            "components/tabview.md",
            "components/vxp-label.md",
            "components/vxp-image.md",
            "components/vxp-side-drawer.md",
            "components/vxp-button.md",
            "components/vxp-link.md",
            "components/vxp-list-view.md",
            "components/vxpiconbutton.md",
            "components/vxpcheckbox.md",
          ]
        },
        {
          title: "Dialogs",
          collapsable: true,
          children: [
            "components/dialogs/alert-dialog.md",
            "components/dialogs/confirm-dialog.md",
          ]
        },
      ]
    }
  },
  dest: "./docs/.vuepress/dist",
  serviceWorker: true
};
