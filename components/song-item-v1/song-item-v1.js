// components/song-item-v1/song-item-v1.js
Component({
    properties: {
        itemData: {
            type: Object,
            value: {}
        }
    },
    methods: {
        onSongItemTap() {
            wx.navigateTo({
                url: '/pages/music-player/music-player',
                data: {
                    id: this.properties.itemData.id
                }
            })
        }
    }
})