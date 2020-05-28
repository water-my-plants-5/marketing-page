const hamburger = document.querySelector('.burger')
const navLinks = document.querySelector('.links')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const main = document.querySelector('main')

hamburger.addEventListener('click', () => {
    console.log("GOTIT")
    navLinks.classList.toggle("open")
    header.classList.toggle("sticky")
    footer.classList.toggle("display")
    if (!main.classList.contains("display")) {
        setTimeout(() => {
            main.classList.toggle("display")
        }, 1000)
    } else {
        main.classList.toggle("display")       
    }
})
