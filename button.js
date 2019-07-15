import { Widget } from './widget.js';

export class Button extends Widget {
    config = {
        text: '按钮',
        color: 'red',
        container: document.body,
        handler: null
    }
    constructor (config = {}) {
        super()
        Object.assign(this.config, config)
        this.render(this.config.container)
    }

    // 添加dom节点
    renderUi () {
        this.component = $(`
            <div class="box-btn red-btn">${this.config.text}</div>
        `)
    }

    // 添加监听事件
    bindUi () {
        this.config.handler && this.component.on('click', () => this.config.handler())
    }

    // 初始化组件属性
    syncUi () {
        this.component.css({
            color: this.config.color
        })
    }
}