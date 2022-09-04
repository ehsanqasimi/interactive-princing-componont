let checkbox = document.querySelector('.checkbox')
let button = document.querySelector('.button')
let toggle = document.querySelector('.toggle')
let schedule = document.querySelector('.schedule')
let money = document.querySelector('.money')
let range = document.querySelector('.range')
let pageview = document.querySelector('.pageviews')



checkbox.addEventListener('click', () => {
    if (checkbox.checked == true) {
        button.style.left = 'unset'
        button.style.right = 0
        toggle.style.backgroundColor = `hsl(174, 86%, 45%)`
        schedule.textContent = "/year"
        let rangeValue = range.value
        let yearPrice = rangeValue * 12
        money.textContent = `$${yearPrice - yearPrice * 0.25}`
        pageview.textContent = `${rangeValue * 6.25 * 12}K PAGEVIEWS`
        range.addEventListener('input', () => {
            let rangeValue = range.value
            let yearPrice = rangeValue * 12
            money.textContent = `$${yearPrice - yearPrice * 0.25}`
            pageview.textContent = `${rangeValue * 6.25 * 12}K PAGEVIEWS`
        })
    }
    else {
        let rangeValue = range.value
        button.style.left = 0
        button.style.right = 'unset'
        toggle.style.backgroundColor = `hsl(226, 100%, 87%)`
        schedule.textContent = "/month"
        money.textContent = `$${range.value}.00`
        pageview.textContent = `${rangeValue * 6.25}K PAGEVIEWS`
        range.addEventListener('input', () => {
            let rangeValue = range.value
            money.textContent = `$${range.value}.00`
            pageview.textContent = `${rangeValue * 6.25}K PAGEVIEWS`
        })
    }

})

range.addEventListener('input', () => {
    money.textContent = `$` + range.value + `.00`
    pageview.textContent = `${range.value * 6.25}K PAGEVIEWS`
    let rangeValue = range.value
})