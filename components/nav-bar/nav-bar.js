const app = getApp()

// components/nav-bar/nav-bar.js
Component({
    data: {
        statusHeight: 20
    },
    lifetimes: {
        attached() {
            this.setData({
                statusHeight: app.globleData.statusHeight
            })
        }
    }
})