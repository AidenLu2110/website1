sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    btn = document.creatElement('button')
    btn.classList.add('btn')
    btn.innerText=sound
})
