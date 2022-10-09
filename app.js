// app.js
App({
    globleData: {
        screenWidth: 375,
        statusHeight: 20
    },
    onLaunch() {
        wx.getSystemInfo({
          success: (res) => {
              this.globleData.screenWidth = res.screenWidth
              this.globleData.statusHeight = res.statusBarHeight
          },
        })
    }
})