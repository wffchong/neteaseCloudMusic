// components/area-header/area-header.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: ''
        },
        hasMore: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onMoreTap() {
            this.triggerEvent('moreclick')
        }
    }
})