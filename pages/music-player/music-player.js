import {
    getSongDetail
} from '../../services/palyer'

// pages/music-player/music-player.js
Page({
    data: {
        id: 0,
        currentSong:{},
        lyricInfos: [],
    },
    onLoad(options) {
        const id = options.id
        this.setData({
            id
        })

        // 获取歌曲详情
        getSongDetail(id).then(res => {
            console.log(res);
            this.setData({
                currentSong: res.songs[0]
            })
        })
    },



})