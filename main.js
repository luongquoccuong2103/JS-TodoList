window.addEventListener('load', () => {
    const form = document.getElementById('new-task-form')
    const input = document.getElementById('new-task-input')
    const tasks = document.getElementById('tasks')

    form.addEventListener('submit', (e) => {
        const text = input.value;
        e.preventDefault()
        if (!text.trim()) {
            alert('please fill a task in')
            return;
        }

        const task_element = document.createElement('div')
        task_element.classList.add('task')

        const task_content_element = document.createElement('div')
        task_content_element.classList.add('content')

        const task_input_element = document.createElement('input')
        task_input_element.classList.add('text')
        task_input_element.setAttribute('type', 'text')
        task_input_element.setAttribute('readonly', 'readonly')
        task_input_element.value = text
        task_content_element.appendChild(task_input_element)

        const actions_element = document.createElement('div')
        actions_element.classList.add('actions')

        const button_edit_element = document.createElement('button')
        button_edit_element.classList.add('edit')
        button_edit_element.innerHTML = 'sửa'
        button_edit_element.onclick = function (e) {
            if (button_edit_element.innerHTML.toLowerCase() == 'sửa') {
                task_input_element.removeAttribute('readonly')
                task_input_element.focus();
                button_edit_element.innerHTML = 'Lưu'
            }else{
                task_input_element.setAttribute('readonly', 'readonly')
                button_edit_element.innerHTML = 'sửa'
            }
            

        }

        const button_delete_element = document.createElement('button')
        button_delete_element.classList.add('delete')
        button_delete_element.innerHTML = 'xóa'
        button_delete_element.onclick = function (e) {
            task_element.remove()
        }

        actions_element.appendChild(button_edit_element)
        actions_element.appendChild(button_delete_element)
        task_element.appendChild(task_content_element)
        task_element.appendChild(actions_element)

        input.value = ''
        tasks.appendChild(task_element)
        
    })
})