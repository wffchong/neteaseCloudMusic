// components/video-item/video-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        itemData: {
            type: Object,
            value: {}
        }
    },
    methods: {
        onVideoItem() {
            const id = this.properties.itemData.id
            wx.navigateTo({
                url: `/pages/detail-video/detail-video?id=${id}`,
            })
        }
    }
})