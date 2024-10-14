// components/popup-list.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        list: {
            type: Array,
            value: []
        },
        title: {
            type: String,
            value: ''
        },
        selectedValue: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        defaultIndex: 0,
        value: ''
    },

    observers: {
        // 监听properties.show属性变化
        show: function(val) {
            if(val) {
                const { selectedValue } = this.properties;
                let defaultIndex = 0
                if(selectedValue) {
                    defaultIndex = this.data.list.findIndex(item => item === selectedValue)
                }
                
                this.data.value = this.data.list[defaultIndex]
                this.setData({
                    defaultIndex
                })
            }
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onCancel() {
            this.triggerEvent("onCancel")
        },
        onConfirm() {
            
            this.triggerEvent("onConfirm", this.data.value)
        },
        onChange(e) {
            this.data.value = e.detail.value
        }
    }
})