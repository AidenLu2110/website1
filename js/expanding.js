panels = document.querySelectorAll('.panel')

panel.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
    })
})



function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
