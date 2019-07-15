export class Widget {
    constructor () {
        this.component = null
    }

    render (container) {
        this.renderUi()
        this.bindUi()
        this.syncUi()
        $(container || document.body).append(this.component)
    }

    // 添加dom节点
    renderUi () {}

    // 添加监听事件
    bindUi () {}

    // 初始化组件属性
    syncUi () {}

    destructor () {}

    destroy () {
        this.destructor()
        this.component.off()
        this.component.remove()
    }

}