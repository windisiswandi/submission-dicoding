let dropdwnBtn = document.querySelector('.dropdown')
let togglerBtn = document.querySelector('.toggle')
let themes = document.querySelector('.themes')
let serachBtn = document.querySelector('i.fa-search')
let closeSearch = document.querySelector('i.fa-times')

dropdwnBtn.addEventListener('click', () => {
    dropdwnBtn.classList.toggle('show')
})

togglerBtn.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
})

themes.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('light')
    themes.classList.toggle('light')
})

serachBtn.addEventListener('click', () => {
    document.querySelector('#main-header form').classList.toggle('show')
})

closeSearch.addEventListener("click", () => {
    document.querySelector('#main-header form').classList.toggle('show');
})