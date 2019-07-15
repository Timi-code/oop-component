import { Box } from './box.js';

const box = []

$('#add').on('click', () => {
    const selected = $('#color')
    const obj = new Box({
        container: $('#boxContent'),
        buttons: [{text: '红', color: 'red'}, {text: '黄', color: 'yellow'}, {text: '蓝', color: 'blue'}],
        activeColor: selected.val(),
        activeText: selected.find('option:selected').text(),
        close (ev) {
            obj.destroy()
        }
    })
    box.push(obj)
})
