// pages/detail-song/detail-song.js
import rankingStore from "../../store/rankingStore"
import recommendStore from "../../store/recommendStore"

Page({
    data: {
        type: 'ranking',

        songInfo: {}
    },
    onLoad(options) {
        // 1.确定获取数据的类型
        // type: ranking -> 榜单数据
        // type: recommend -> 推荐数据
        const type = options.type
        this.setData({
            type
        })

        // 根据type从store中获取榜单数据
        if (type === 'recommend') {
            recommendStore.onState('recommendSongInfo', this.handleRanking)
        }
    },

    handleRanking(value) {
        console.log(value);
        this.setData({
            songInfo: value
        })
        wx.setNavigationBarTitle({
            title: value.name,
          })
    }
})