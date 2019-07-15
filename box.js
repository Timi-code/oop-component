import { Widget } from './widget.js';
import { Button } from './button.js';

export class Box extends Widget{
    config = {
        width: 200,
        height: 200,
        activeColor: 'red',
        activeText: '红',
        buttons: [],
        container: document.body,
        close: null
    }
    constructor (config = {}) {
        super()
        Object.assign(this.config, config)
        this.render(this.config.container)
    }

    // 添加dom节点
    renderUi () {
        const self = this
        this.component = $(`
            <div class="box">
                <div class="box-close">x</div>
                <div class="box-content">${this.config.activeText}</div>
                <div class="footer">
                </div>
            </div>
        `)
        this.config.buttons.forEach(item => {
            new Button({
                container: this.component.find('.footer'),
                text: item.text,
                color: item.color,
                handler () {
                    self.changeColor(item.text, item.color)
                }
            })
        })
    }

    // 添加监听事件
    bindUi () {
        this.component.on('click', '.box-close', (ev) => {
            this.config.close && this.config.close(ev)
        })
    }

    // 初始化组件属性
    syncUi () {
        this.component.css({
            width: this.config.width + 'px',
            height: this.config.height + 'px',
            'background-color': this.config.activeColor
        })
    }

    changeColor (text, color) {
        this.component.css('background-color', color)
        this.component.find('.box-content').html(text)
    }
}
