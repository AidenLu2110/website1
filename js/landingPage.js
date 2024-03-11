toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('moda')

toggle.addEventListener('click', () => {
    document.body.classlist.toggle('show-nav')
})

open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})
