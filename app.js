// app.js
App({
    globleData: {
        screenWidth: 375,
    },
    onLaunch() {
        wx.getSystemInfo({
          success: (res) => {
              this.globleData.screenWidth = res.screenWidth
          },
        })
    }
})